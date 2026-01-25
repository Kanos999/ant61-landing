import { useEffect, useMemo, useRef } from 'react'

function projectIso({ x, y, z }) {
  // Classic isometric projection (30deg)
  const cos = 0.8660254037844386 // Math.cos(Math.PI / 6)
  const sin = 0.5 // Math.sin(Math.PI / 6)
  return {
    x: (x - z) * cos,
    y: y + (x + z) * sin,
  }
}

function bounds2D(points) {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  for (const p of points) {
    if (p.x < minX) minX = p.x
    if (p.y < minY) minY = p.y
    if (p.x > maxX) maxX = p.x
    if (p.y > maxY) maxY = p.y
  }
  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY }
}

function drawPolyline(ctx, pts) {
  if (!pts.length) return
  ctx.beginPath()
  ctx.moveTo(pts[0].x, pts[0].y)
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y)
  ctx.stroke()
}

function drawSegments(ctx, segments) {
  ctx.beginPath()
  for (const [a, b] of segments) {
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
  }
  ctx.stroke()
}

export function SatelliteOutlineCanvas({
  className,
  stroke = 'rgba(255,255,255,0.45)',
  lineWidth = 2,
}) {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)

  const model = useMemo(() => {
    // Simple satellite built from boxes: main body + solar panels + antenna
    // Units are arbitrary; we'll scale to fit the canvas.

    const body = { w: 4.6, h: 2.6, d: 3.0 }
    const panel = { w: 5.8, h: 0.08, d: 1.7 }

    // Body corners (centered)
    const bx = body.w / 2
    const by = body.h / 2
    const bz = body.d / 2

    const bodyCorners = {
      // bottom
      bfl: { x: -bx, y: -by, z: -bz },
      bfr: { x: bx, y: -by, z: -bz },
      bbr: { x: bx, y: -by, z: bz },
      bbl: { x: -bx, y: -by, z: bz },
      // top
      tfl: { x: -bx, y: by, z: -bz },
      tfr: { x: bx, y: by, z: -bz },
      tbr: { x: bx, y: by, z: bz },
      tbl: { x: -bx, y: by, z: bz },
    }

    const edges = [
      // bottom loop
      [bodyCorners.bfl, bodyCorners.bfr],
      [bodyCorners.bfr, bodyCorners.bbr],
      [bodyCorners.bbr, bodyCorners.bbl],
      [bodyCorners.bbl, bodyCorners.bfl],
      // top loop
      [bodyCorners.tfl, bodyCorners.tfr],
      [bodyCorners.tfr, bodyCorners.tbr],
      [bodyCorners.tbr, bodyCorners.tbl],
      [bodyCorners.tbl, bodyCorners.tfl],
      // verticals
      [bodyCorners.bfl, bodyCorners.tfl],
      [bodyCorners.bfr, bodyCorners.tfr],
      [bodyCorners.bbr, bodyCorners.tbr],
      [bodyCorners.bbl, bodyCorners.tbl],
    ]

    // Minimal surface details: inset panel on the top face
    const inset = {
      a: { x: -bx * 0.55, y: by, z: -bz * 0.4 },
      b: { x: bx * 0.25, y: by, z: -bz * 0.4 },
      c: { x: bx * 0.25, y: by, z: bz * 0.2 },
      d: { x: -bx * 0.55, y: by, z: bz * 0.2 },
    }
    const insetOutline = [
      [inset.a, inset.b],
      [inset.b, inset.c],
      [inset.c, inset.d],
      [inset.d, inset.a],
    ]

    // A couple of top vent lines
    const vents = [
      [{ x: -bx * 0.15, y: by, z: -bz * 0.2 }, { x: bx * 0.15, y: by, z: -bz * 0.2 }],
      [{ x: -bx * 0.15, y: by, z: 0 }, { x: bx * 0.15, y: by, z: 0 }],
    ]

    // Panel rectangles (left & right of body), attached roughly mid-height
    const panelY = 0.2
    const py = panel.h / 2
    const pz = panel.d / 2

    const leftPanelX = -(bx + panel.w / 2 + 0.3)
    const rightPanelX = bx + panel.w / 2 + 0.3

    function panelCorners(cx) {
      const px = panel.w / 2
      return {
        tl: { x: cx - px, y: panelY + py, z: -pz },
        tr: { x: cx + px, y: panelY + py, z: -pz },
        br: { x: cx + px, y: panelY - py, z: pz },
        bl: { x: cx - px, y: panelY - py, z: pz },
      }
    }

    const lp = panelCorners(leftPanelX)
    const rp = panelCorners(rightPanelX)

    const panelOutlines = [
      // left
      [lp.tl, lp.tr],
      [lp.tr, lp.br],
      [lp.br, lp.bl],
      [lp.bl, lp.tl],
      // right
      [rp.tl, rp.tr],
      [rp.tr, rp.br],
      [rp.br, rp.bl],
      [rp.bl, rp.tl],
    ]

    // Small brackets from body to each panel (suggests mounting)
    const brackets = [
      // left
      [{ x: -bx, y: panelY, z: -bz * 0.2 }, { x: lp.tr.x + 0.4, y: panelY, z: lp.tr.z }],
      [{ x: -bx, y: panelY, z: bz * 0.2 }, { x: lp.br.x + 0.4, y: panelY, z: lp.br.z }],
      // right
      [{ x: bx, y: panelY, z: -bz * 0.2 }, { x: rp.tl.x - 0.4, y: panelY, z: rp.tl.z }],
      [{ x: bx, y: panelY, z: bz * 0.2 }, { x: rp.bl.x - 0.4, y: panelY, z: rp.bl.z }],
    ]

    // Panel inner grid lines (basic geometry lines)
    const grid = []
    const gridCols = 4
    for (let i = 1; i < gridCols; i++) {
      const t = i / gridCols
      const lx = lp.tl.x + (lp.tr.x - lp.tl.x) * t
      grid.push([
        { x: lx, y: lp.tl.y, z: lp.tl.z },
        { x: lx, y: lp.bl.y, z: lp.bl.z },
      ])
      const rx = rp.tl.x + (rp.tr.x - rp.tl.x) * t
      grid.push([
        { x: rx, y: rp.tl.y, z: rp.tl.z },
        { x: rx, y: rp.bl.y, z: rp.bl.z },
      ])
    }

    // Add a few horizontal grid lines too (keeps it minimalist but richer)
    const gridRows = 3
    for (let j = 1; j < gridRows; j++) {
      const t = j / gridRows
      const ly = lp.tl.y + (lp.bl.y - lp.tl.y) * t
      grid.push([
        { x: lp.tl.x, y: ly, z: lp.tl.z },
        { x: lp.tr.x, y: ly, z: lp.tr.z },
      ])
      const ry = rp.tl.y + (rp.bl.y - rp.tl.y) * t
      grid.push([
        { x: rp.tl.x, y: ry, z: rp.tl.z },
        { x: rp.tr.x, y: ry, z: rp.tr.z },
      ])
    }

    // Antenna mast + dish (a couple of lines)
    const mastBase = { x: bx * 0.4, y: by, z: -bz * 0.2 }
    const mastTop = { x: mastBase.x + 0.0, y: mastBase.y + 2.1, z: mastBase.z + 0.0 }
    const dishCenter = { x: mastTop.x + 0.9, y: mastTop.y + 0.2, z: mastTop.z - 0.8 }

    const antenna = [
      [mastBase, mastTop],
      [mastTop, dishCenter],
      // small dish ring (diamond in iso)
      [
        { x: dishCenter.x, y: dishCenter.y + 0.7, z: dishCenter.z },
        { x: dishCenter.x + 0.7, y: dishCenter.y, z: dishCenter.z },
      ],
      [
        { x: dishCenter.x + 0.7, y: dishCenter.y, z: dishCenter.z },
        { x: dishCenter.x, y: dishCenter.y - 0.7, z: dishCenter.z },
      ],
      [
        { x: dishCenter.x, y: dishCenter.y - 0.7, z: dishCenter.z },
        { x: dishCenter.x - 0.7, y: dishCenter.y, z: dishCenter.z },
      ],
      [
        { x: dishCenter.x - 0.7, y: dishCenter.y, z: dishCenter.z },
        { x: dishCenter.x, y: dishCenter.y + 0.7, z: dishCenter.z },
      ],
    ]

    // Rear thrusters (simple trapezoid-ish outlines)
    const thrusters = [
      // two small nozzles on the rear face
      [
        { x: -bx * 0.35, y: -by * 0.2, z: bz },
        { x: -bx * 0.15, y: -by * 0.35, z: bz + 0.8 },
      ],
      [
        { x: -bx * 0.15, y: -by * 0.35, z: bz + 0.8 },
        { x: bx * 0.05, y: -by * 0.2, z: bz },
      ],
      [
        { x: bx * 0.1, y: -by * 0.2, z: bz },
        { x: bx * 0.3, y: -by * 0.35, z: bz + 0.8 },
      ],
      [
        { x: bx * 0.3, y: -by * 0.35, z: bz + 0.8 },
        { x: bx * 0.5, y: -by * 0.2, z: bz },
      ],
    ]

    // Collect for bounds
    const all3D = [
      ...Object.values(bodyCorners),
      ...Object.values(inset),
      ...Object.values(lp),
      ...Object.values(rp),
      mastBase,
      mastTop,
      dishCenter,
    ]

    return { edges, insetOutline, vents, panelOutlines, brackets, grid, antenna, thrusters, all3D }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const redraw = () => {
      const rect = wrapper.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      ctx.lineWidth = lineWidth
      ctx.strokeStyle = stroke
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'

      // Project points and auto-fit into canvas
      const projected = model.all3D.map(projectIso)
      const b = bounds2D(projected)

      const pad = 28
      const scale = Math.min((width - pad * 2) / b.width, (height - pad * 2) / b.height)

      const cx = width / 2
      const cy = height / 2

      const toCanvas = (p3) => {
        const p = projectIso(p3)
        return {
          x: cx + (p.x - (b.minX + b.width / 2)) * scale,
          y: cy + (p.y - (b.minY + b.height / 2)) * scale,
        }
      }

      // Draw outlines
      drawSegments(ctx, model.panelOutlines.map(([a, b]) => [toCanvas(a), toCanvas(b)]))

      const prev = ctx.globalAlpha
      ctx.globalAlpha = 0.6
      drawSegments(ctx, model.brackets.map(([a, b]) => [toCanvas(a), toCanvas(b)]))
      drawSegments(ctx, model.grid.map(([a, b]) => [toCanvas(a), toCanvas(b)]))
      ctx.globalAlpha = prev

      // Body slightly stronger
      const prevAlpha = ctx.globalAlpha
      ctx.globalAlpha = 0.95
      drawSegments(ctx, model.edges.map(([a, b]) => [toCanvas(a), toCanvas(b)]))

      ctx.globalAlpha = 0.55
      drawSegments(ctx, model.insetOutline.map(([a, b]) => [toCanvas(a), toCanvas(b)]))
      drawSegments(ctx, model.vents.map(([a, b]) => [toCanvas(a), toCanvas(b)]))
      drawSegments(ctx, model.thrusters.map(([a, b]) => [toCanvas(a), toCanvas(b)]))

      ctx.globalAlpha = prevAlpha

      // Antenna
      drawSegments(ctx, model.antenna.map(([a, b]) => [toCanvas(a), toCanvas(b)]))

      // Tiny accent: center crosshair
      ctx.globalAlpha = 0.35
      ctx.beginPath()
      ctx.moveTo(cx - 10, cy)
      ctx.lineTo(cx + 10, cy)
      ctx.moveTo(cx, cy - 10)
      ctx.lineTo(cx, cy + 10)
      ctx.stroke()
      ctx.globalAlpha = 1
    }

    const ro = new ResizeObserver(() => redraw())
    ro.observe(wrapper)

    redraw()

    return () => {
      ro.disconnect()
    }
  }, [lineWidth, model, stroke])

  return (
    <div ref={wrapperRef} className={className}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
