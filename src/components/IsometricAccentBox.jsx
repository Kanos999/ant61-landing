import { useEffect, useMemo, useRef } from 'react'
import { animate } from 'animejs'

function projectIso({ x, y, z }) {
  const cos = 0.8660254037844386
  const sin = 0.5
  return { x: (x - z) * cos, y: y + (x + z) * sin }
}

function drawSegments(ctx, segments) {
  ctx.beginPath()
  for (const [a, b] of segments) {
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
  }
  ctx.stroke()
}

export function IsometricAccentBox({
  className,
  stroke = 'rgba(255,154,66,0.9)',
  fill = 'rgba(255,154,66,0.18)',
  lineWidth = 2,
}) {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)

  const animRef = useRef({
    floatY: 0,
    bob: 0,
  })

  const model = useMemo(() => {
    // Simple isometric box (like a small package) built from 3 faces.
    const w = 3.2
    const h = 1.4
    const d = 2.4
    const x = w / 2
    const y = h / 2
    const z = d / 2

    const c = {
      bfl: { x: -x, y: -y, z: -z },
      bfr: { x: x, y: -y, z: -z },
      bbr: { x: x, y: -y, z: z },
      bbl: { x: -x, y: -y, z: z },
      tfl: { x: -x, y: y, z: -z },
      tfr: { x: x, y: y, z: -z },
      tbr: { x: x, y: y, z: z },
      tbl: { x: -x, y: y, z: z },
    }

    const edges = [
      [c.bfl, c.bfr],
      [c.bfr, c.bbr],
      [c.bbr, c.bbl],
      [c.bbl, c.bfl],
      [c.tfl, c.tfr],
      [c.tfr, c.tbr],
      [c.tbr, c.tbl],
      [c.tbl, c.tfl],
      [c.bfl, c.tfl],
      [c.bfr, c.tfr],
      [c.bbr, c.tbr],
      [c.bbl, c.tbl],
    ]

    // A simple seam line across the top
    const seam = [[{ x: -x * 0.9, y: y, z: 0 }, { x: x * 0.9, y: y, z: 0 }]]

    // A small label rectangle on the front face
    const label = {
      a: { x: -x * 0.55, y: 0.05, z: -z },
      b: { x: x * 0.15, y: 0.05, z: -z },
      c: { x: x * 0.15, y: -y * 0.45, z: -z },
      d: { x: -x * 0.55, y: -y * 0.45, z: -z },
    }
    const labelOutline = [
      [label.a, label.b],
      [label.b, label.c],
      [label.c, label.d],
      [label.d, label.a],
    ]

    const all3D = [...Object.values(c), ...Object.values(label)]

    return { edges, seam, labelOutline, all3D }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0

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
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'

      const projected = model.all3D.map(projectIso)
      let minX = Infinity
      let minY = Infinity
      let maxX = -Infinity
      let maxY = -Infinity
      for (const p of projected) {
        if (p.x < minX) minX = p.x
        if (p.y < minY) minY = p.y
        if (p.x > maxX) maxX = p.x
        if (p.y > maxY) maxY = p.y
      }

      const pad = 18
      const bw = maxX - minX
      const bh = maxY - minY
      const scale = Math.min((width - pad * 2) / bw, (height - pad * 2) / bh)
      const cx = width / 2
      const cy = height / 2 + animRef.current.floatY

      const toCanvas = (p3) => {
        const p = projectIso(p3)
        return {
          x: cx + (p.x - (minX + bw / 2)) * scale,
          y: cy + (p.y - (minY + bh / 2)) * scale,
        }
      }

      // Fill a subtle top face polygon (tfl -> tfr -> tbr -> tbl)
      const topFace = [
        { x: -1.6, y: 0.7, z: -1.2 },
        { x: 1.6, y: 0.7, z: -1.2 },
        { x: 1.6, y: 0.7, z: 1.2 },
        { x: -1.6, y: 0.7, z: 1.2 },
      ].map(toCanvas)

      ctx.fillStyle = fill
      ctx.beginPath()
      ctx.moveTo(topFace[0].x, topFace[0].y)
      for (let i = 1; i < topFace.length; i++) ctx.lineTo(topFace[i].x, topFace[i].y)
      ctx.closePath()
      ctx.fill()

      ctx.strokeStyle = stroke
      drawSegments(ctx, model.edges.map(([a, b]) => [toCanvas(a), toCanvas(b)]))

      ctx.globalAlpha = 0.75
      drawSegments(ctx, model.seam.map(([a, b]) => [toCanvas(a), toCanvas(b)]))
      ctx.globalAlpha = 0.65
      drawSegments(ctx, model.labelOutline.map(([a, b]) => [toCanvas(a), toCanvas(b)]))
      ctx.globalAlpha = 1

      raf = window.requestAnimationFrame(redraw)
    }

    raf = window.requestAnimationFrame(redraw)

    const animation = animate(animRef.current, {
      floatY: [-6, 6],
      duration: 2400,
      easing: 'inOutSine',
      direction: 'alternate',
      loop: true,
    })

    return () => {
      animation.pause()
      window.cancelAnimationFrame(raf)
    }
  }, [fill, lineWidth, model, stroke])

  return (
    <div ref={wrapperRef} className={className}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
