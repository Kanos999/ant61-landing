import { useEffect, useLayoutEffect, useRef } from 'react'
import { createTimeline } from 'animejs'

export const Overlay = ({ scrollProgressRef }) => {
  const stageRef = useRef(null)
  const titleRef = useRef(null)
  const featuresRef = useRef(null)
  const timelineRef = useRef(null)
  const rafIdRef = useRef(null)

  useLayoutEffect(() => {
    if (!stageRef.current || !titleRef.current || !featuresRef.current) return

    stageRef.current.style.backgroundColor = '#000000'
    titleRef.current.style.opacity = '1'
    titleRef.current.style.transform = 'translate(0px, 0px)'
    featuresRef.current.style.opacity = '0'
    featuresRef.current.style.transform = 'translateY(24px)'

    const tl = createTimeline({ autoplay: false, easing: 'easeInOutQuad' })

    // Page 1: subtle title drift
    tl.add({ targets: titleRef.current, translateY: [0, -16], duration: 900 }, 0)

    // Transition between pages: title out, bg to yellow, features in
    tl.add(
      { targets: titleRef.current, opacity: [1, 0], translateX: [0, -40], duration: 650 },
      850,
    )
    tl.add({ targets: stageRef.current, backgroundColor: ['#000000', '#ffcc33'], duration: 900 }, 850)
    tl.add({ targets: featuresRef.current, opacity: [0, 1], translateY: [24, 0], duration: 700 }, 1050)

    timelineRef.current = tl
  }, [])

  useEffect(() => {
    const tick = () => {
      const tl = timelineRef.current
      if (tl) {
        const progress = scrollProgressRef?.current ?? 0
        tl.seek(progress * tl.duration)
      }
      rafIdRef.current = window.requestAnimationFrame(tick)
    }

    rafIdRef.current = window.requestAnimationFrame(tick)
    return () => {
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current)
    }
  }, [scrollProgressRef])

  return (
    <div className="relative h-[200vh]">
      <div ref={stageRef} className="sticky top-0 h-screen w-screen">
        {/* Page 1: title on left, model on right (via Canvas) */}
        <section className="absolute inset-0 flex items-center">
          <div ref={titleRef} className="w-1/2 pl-24 pr-10 leading-tight">
            <div className="text-white font-roboto font-bold text-[78pt] tracking-tight">Beacon</div>
            <div className="text-white/80 font-roboto text-[22pt] mt-6 max-w-xl">
              The always-on link for your satellite.
            </div>
          </div>
          <div className="w-1/2" />
        </section>

        {/* Page 2: features on solid #ffcc33 */}
        <section className="absolute inset-0 flex items-center">
          <div ref={featuresRef} className="w-full px-24">
            <div className="text-black font-roboto font-bold text-[54pt]">Features</div>
            <div className="mt-10 grid grid-cols-3 gap-10">
              <div className="text-black">
                <div className="font-bold text-[22pt]">2-way communication</div>
                <div className="mt-3 text-[14pt] opacity-80">Independent messaging via inter-satellite links.</div>
              </div>
              <div className="text-black">
                <div className="font-bold text-[22pt]">Accurate state estimation</div>
                <div className="mt-3 text-[14pt] opacity-80">Know where you are and how you’re performing.</div>
              </div>
              <div className="text-black">
                <div className="font-bold text-[22pt]">Redundant power</div>
                <div className="mt-3 text-[14pt] opacity-80">Double-redundant independent power for reliability.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}