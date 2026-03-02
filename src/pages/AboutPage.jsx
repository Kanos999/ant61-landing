import { Header } from "../components/Header";
import { advisors, coreTeam, historyCards } from "../lib/consts";
import { HistoryCard } from "../components/HistoryCard";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export function AboutPage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end [5%]"],
  });

  // Smooth the motion
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="bg-[#252634] min-h-screen text-white">
      <Header />
      <div className="flex flex-col items-center text-center justify-center py-[4vw] w-full px-[10vw] gap-12">
        {/* ADVISORS */}
        <div className="w-full">
          <h2 className="text-[2vw] font-bold mb-6">ADVISORS</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 text-center"
              >
                <img
                  src={advisor.imageURL}
                  alt={advisor.name}
                  className="w-[10vw] rounded-full mb-2"
                />
                <p className="text-[1.2vw] font-bold">{advisor.name}</p>
                <p className="text-[1vw] font-light">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CORE TEAM */}
        <div className="w-full">
          <h2 className="text-[2vw] font-bold mb-6">CORE TEAM</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 text-center"
              >
                <img
                  src={member.imageURL}
                  alt={member.name}
                  className="w-[10vw] rounded-full mb-2"
                />
                <p className="text-[1.2vw] font-bold">{member.name}</p>
                <p className="text-[1vw] font-light">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center justify-center py-[4vw] w-full px-[10vw] gap-12">
        <h2 className="text-[2vw] font-bold mb-6">Our History</h2>
      </div>
      <div className="relative w-full py-20" ref={containerRef}>
        {/* Center vertical line */}
        {/* Background line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-neutral-800" />

        {/* Scroll progress line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-yellow-400 origin-top"
        />

        <div className="flex flex-col gap-24">
          {historyCards.map((card) => {
            const isOdd = card.id % 2 === 1;

            return (
              <div
                key={card.id}
                className="relative grid grid-cols-[1fr_auto_1fr] items-center"
              >
                {/* LEFT COLUMN */}
                <div className="flex justify-end pr-8">
                  {!isOdd && <HistoryCard card={card} />}
                </div>

                {/* CENTER DOT */}
                <div className="flex flex-basis-2 justify-center">
                  <div className="z-10 h-8 w-8 rounded-full bg-yellow-400 border-4 border-[#252634]" />
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex justify-start pl-8">
                  {isOdd && <HistoryCard card={card} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
