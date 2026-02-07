import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import * as satellite from 'satellite.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'

const EARTH_RADIUS_KM = 6371

const fibonacciSphereLatLon = (count) => {
  // Returns roughly-even distribution on a sphere as lat/lon pairs (radians).
  // Uses the Fibonacci sphere algorithm.
  const points = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1)
    const y = 1 - 2 * t // 1..-1
    const radius = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = goldenAngle * i

    const x = Math.cos(theta) * radius
    const z = Math.sin(theta) * radius

    // Convert Cartesian unit vector to geodetic-ish lat/lon.
    const lat = Math.asin(THREE.MathUtils.clamp(y, -1, 1))
    const lon = Math.atan2(z, x)
    points.push({ lat, lon })
  }

  return points
}

const buildNearestNeighborSegments = (positions, neighborsPerPoint = 3) => {
  // Build undirected line segments by connecting each point to its k nearest neighbors.
  // Returns a flat Float32Array of xyz endpoints: [a.x,a.y,a.z, b.x,b.y,b.z, ...]
  const pairSet = new Set()
  const segments = []

  for (let i = 0; i < positions.length; i++) {
    const a = positions[i]
    const distances = []
    for (let j = 0; j < positions.length; j++) {
      if (i === j) continue
      const b = positions[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dz = a.z - b.z
      const d2 = dx * dx + dy * dy + dz * dz
      distances.push({ j, d2 })
    }
    distances.sort((p, q) => p.d2 - q.d2)

    for (let n = 0; n < Math.min(neighborsPerPoint, distances.length); n++) {
      const j = distances[n].j
      const min = Math.min(i, j)
      const max = Math.max(i, j)
      const key = `${min}-${max}`
      if (pairSet.has(key)) continue
      pairSet.add(key)

      const b = positions[j]
      segments.push(a.x, a.y, a.z, b.x, b.y, b.z)
    }
  }

  return new Float32Array(segments)
}

export const GlobeConstellation = ({
  scrollProgressRef,
  globeRadius = 4.6,
  satelliteCount = 80,
  satelliteAltitudeKm = 1100,
}) => {
  const groupRef = useRef(null)
  const satelliteMeshRef = useRef(null)
  const blueSatelliteRef = useRef(null)
  const { size } = useThree()

  const maxBlueLinks = 5
  const blueLinkStateRef = useRef(
    Array.from({ length: maxBlueLinks }, () => ({ satIndex: null, opacity: 0 })),
  )

  const {
    satelliteGeometry,
    satelliteMaterial,
    satelliteMatrices,
    satellitePositions,
    linkLine,
    linkMaterial,
    blueSatelliteGeometry,
    blueSatelliteMaterial,
    blueLinkLines,
  } = useMemo(() => {
    const dotRadius = globeRadius * 0.009
    const geometry = new THREE.SphereGeometry(dotRadius, 10, 10)
    const material = new THREE.MeshStandardMaterial({
      color: '#ffcc33',
      emissive: '#ffcc33',
      emissiveIntensity: 0.7,
      roughness: 0.25,
      metalness: 0.0,
    })

    const scale = globeRadius / EARTH_RADIUS_KM
    const points = fibonacciSphereLatLon(satelliteCount)

    const positions = []
    const matrices = points.map(({ lat, lon }) => {
      const gd = {
        latitude: lat,
        longitude: lon,
        height: satelliteAltitudeKm,
      }

      // ECF is Earth-fixed XYZ in km. We use satellite.js to keep the coordinate
      // conversions clean and consistent.
      const ecf = satellite.geodeticToEcf(gd)

      // Map km-space into our scene units.
      const position = new THREE.Vector3(ecf.x * scale, ecf.z * scale, -ecf.y * scale)
      positions.push(position)
      const m = new THREE.Matrix4()
      m.setPosition(position)
      return m
    })

    const segmentPositions = buildNearestNeighborSegments(positions, 3)

    // Thick line rendering using Line2 classes.
    const linkGeo = new LineSegmentsGeometry()
    linkGeo.setPositions(segmentPositions)
    const linkMat = new LineMaterial({
      color: 0xffcc33,
      linewidth: 1.4,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    })
    const link = new LineSegments2(linkGeo, linkMat)
    link.computeLineDistances()

    const blueGeo = new THREE.SphereGeometry(dotRadius * 1.25, 12, 12)
    const blueMat = new THREE.MeshStandardMaterial({
      color: '#3b82f6',
      emissive: '#3b82f6',
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.0,
    })

    const makeBlueLink = () => {
      const blueLinkGeo = new LineSegmentsGeometry()
      // IMPORTANT: LineSegmentsGeometry.setPositions() cannot accept an empty array.
      // Seed a placeholder segment and keep opacity at 0 until used.
      blueLinkGeo.setPositions([0, 0, 0, 0, 0, 0])
      const blueLinkMat = new LineMaterial({
        color: 0xffcc33,
        linewidth: 1.8,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      })
      const blueLink = new LineSegments2(blueLinkGeo, blueLinkMat)
      blueLink.computeLineDistances()
      return blueLink
    }

    const blueLinks = Array.from({ length: maxBlueLinks }, () => makeBlueLink())

    return {
      satelliteGeometry: geometry,
      satelliteMaterial: material,
      satelliteMatrices: matrices,
      satellitePositions: positions,
      linkLine: link,
      linkMaterial: linkMat,
      blueSatelliteGeometry: blueGeo,
      blueSatelliteMaterial: blueMat,
      blueLinkLines: blueLinks,
    }
  }, [globeRadius, satelliteAltitudeKm, satelliteCount, maxBlueLinks])

  useEffect(() => {
    const instanced = satelliteMeshRef.current
    if (!instanced) return

    for (let i = 0; i < satelliteMatrices.length; i++) {
      instanced.setMatrixAt(i, satelliteMatrices[i])
    }
    instanced.instanceMatrix.needsUpdate = true
  }, [satelliteMatrices])

  useFrame((state, delta) => {
    const group = groupRef.current
    if (!group) return

    const scroll = scrollProgressRef?.current ?? 0
    const baseSpin = 0.06

    group.rotation.y += delta * baseSpin
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, (scroll - 0.5) * 0.35, 0.03)

    // Subtle “breathing” on satellite emissive.
    const mat = satelliteMaterial
    mat.emissiveIntensity = 0.55 + 0.25 * Math.sin(state.clock.elapsedTime * 1.6)

    // Keep thick-line materials crisp (LineMaterial needs resolution in px).
    linkMaterial.resolution.set(size.width, size.height)
    for (const l of blueLinkLines) {
      l.material.resolution.set(size.width, size.height)
    }

    // Blue satellite: faster sun-synchronous-ish polar orbit (visual approximation).
    const blueSatellite = blueSatelliteRef.current
    if (blueSatellite) {
      const kmToUnits = globeRadius / EARTH_RADIUS_KM
      const blueAltitudeKm = 450
      const r = (EARTH_RADIUS_KM + blueAltitudeKm) * kmToUnits
      const t = state.clock.elapsedTime
      const speed = 0.9
      const theta = t * speed

      const localPos = new THREE.Vector3(r * Math.cos(theta), r * Math.sin(theta), 0)

      // Rotate the orbit plane around Earth's axis to give it a unique track.
      localPos.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.9)
      blueSatellite.position.copy(localPos)
    }

    // Dynamic adjacency links from blue satellite to nearby constellation sats.
    if (blueSatelliteRef.current) {
      const p = blueSatelliteRef.current.position
      const candidates = []
      for (let i = 0; i < satellitePositions.length; i++) {
        const s = satellitePositions[i]
        const d2 = p.distanceToSquared(s)
        candidates.push({ i, d2 })
      }
      candidates.sort((a, b) => a.d2 - b.d2)

      // Single source of truth for when a link can exist AND how it fades.
      // At dist === renderDist, opacity should be 0; closer => more opaque.
      const renderDist = globeRadius * 0.85
      const renderDist2 = renderDist * renderDist

      const stateArr = blueLinkStateRef.current

      for (let k = 0; k < blueLinkLines.length; k++) {
        const line = blueLinkLines[k]
        const c = candidates[k]
        const s = c ? satellitePositions[c.i] : null

        if (!c || !s || c.d2 > renderDist2) {
          stateArr[k].satIndex = null
          stateArr[k].opacity = 0
          line.material.opacity = 0
          continue
        }

        // If this slot starts linking to a different satellite, restart fade from 0.
        if (stateArr[k].satIndex !== c.i) {
          stateArr[k].satIndex = c.i
          stateArr[k].opacity = 0
        }

        const dist = Math.sqrt(c.d2)
        const t = THREE.MathUtils.clamp((renderDist - dist) / renderDist, 0, 1)
        const targetOpacity = 2.5 * (t * t)

        // Ease toward the distance-based opacity to avoid any residual popping.
        stateArr[k].opacity = THREE.MathUtils.lerp(stateArr[k].opacity, targetOpacity, 0.12)
        line.material.opacity = stateArr[k].opacity
        line.geometry.setPositions([p.x, p.y, p.z, s.x, s.y, s.z])
        line.computeLineDistances()
      }
    }
  })

  return (
    <group ref={groupRef} position={[0, 0.2, 0]}>
      {/* Globe base */}
      <mesh>
        <sphereGeometry args={[globeRadius, 64, 64]} />
        <meshStandardMaterial color={'#070a10'} roughness={0.95} metalness={0.02} />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[globeRadius * 1.002, 42, 42]} />
        <meshBasicMaterial color={'#ffffff'} wireframe transparent opacity={0.08} />
      </mesh>

      {/* Atmosphere hint */}
      <mesh>
        <sphereGeometry args={[globeRadius * 1.03, 64, 64]} />
        <meshBasicMaterial color={'#ffffff'} transparent opacity={0.04} />
      </mesh>

      {/* Inter-satellite links */}
      <primitive object={linkLine} frustumCulled={false} />

      {/* Constellation */}
      <instancedMesh
        ref={satelliteMeshRef}
        args={[satelliteGeometry, satelliteMaterial, satelliteCount]}
        frustumCulled={false}
      />

      {/* Blue polar-orbit satellite */}
      <mesh ref={blueSatelliteRef} geometry={blueSatelliteGeometry} material={blueSatelliteMaterial} />

      {/* Blue satellite adjacency links (yellow, thicker) */}
      {blueLinkLines.map((l, i) => (
        <primitive key={i} object={l} frustumCulled={false} />
      ))}
    </group>
  )
}
