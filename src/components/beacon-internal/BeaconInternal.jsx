import { useState } from "react";
import beaconOpen from "../../../public/beacon-open.png";
import { IoIosArrowForward } from "react-icons/io";

const baseRightEndx = 78;
const extendedRightEndx = 106;
const baseLeftEndx = 15;
const extendedLeftEndx = -13;

const components = [
  {
    id: 1,
    start: { x: 55, y: 15 },
    joint: { x: 70, y: -19 },
    svgArray: [
      {x: 55, y: 15},
      {x: 70, y: 19},
      {x: 106, y: 19},
    ],
    side: "right",
    label: "Testing",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
  {
    id: 2,
    start: { x: 46, y: 43 },
    joint: { x: 70, y: -12 },
    side: "right",
    label: "Telemetry",
    description:
      "Providing comprehensive telemetry and data collection, the Beacon offers a wide range of data points including orbital parameters, attitude information, radiation events, temperature, vibrations, and power bus characteristics. It can operate autonomously, collecting and transmitting data independently, or seamlessly integrate with your existing satellite systems to collect additional telemetry from the satellite bus.",
  },
  {
    id: 3,
    start: { x: 52, y: 36 },
    joint: { x: 70, y: -5 },
    side: "right",
    label: "Diagnostics",
    description:
      "ANT61 Beacon provides robust anomaly diagnostics and recovery capabilities, independent of the primary satellite CDHS. With flexible options for telemetry and data integration, it supports your choice of bus or offers complete component integration for seamless operation. In the unlikely event of a satellite anomaly, the ANT61 Beacon ensures rapid diagnosis and efficient recovery, empowering mission assurance and satellite performance.",
  },
  {
    id: 4,
    start: { x: 60, y: 36 },
    joint: { x: 74, y: 2 },
    side: "right",
    label: "Power",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
  {
    id: 5,
    start: { x: 34, y: 55 },
    joint: { x: 20, y: 84 },
    side: "left",
    label: "Robust",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
  {
    id: 6,
    start: { x: 35.5, y: 60.5 },
    joint: { x: 22, y: 91 },
    side: "left",
    label: "Security",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
  {
    id: 7,
    start: { x: 41, y: 57 },
    joint: { x: 23, y: 98 },
    side: "left",
    label: "Integration",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
  {
    id: 8,
    start: { x: 45, y: 67 },
    joint: { x: 29, y: 105 },
    side: "left",
    label: "Communication",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
  {
    id: 9,
    start: { x: 46, y: 80 },
    joint: { x: 33, y: 112 },
    side: "left",
    label: "Accessibility",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
];

export function BeaconInternal() {
  const [extendedLineRightId, setExtendedLineRightId] = useState(1);
  const [extendedLineLeftId, setExtendedLineLeftId] = useState(5);

  const rightComponents = components.filter((c) => c.side === "right");
  const leftComponents = components.filter((c) => c.side === "left");

  return (
    <div className="flex flex-col items-center py-[5vw] pb-[10vw] w-full">
      <div className="flex-1 flex flex-row gap-3 mb-[5vw]">
        <p className="text-[3vw] font-bold">BEACON</p>
        <p className="text-[3vw] font-normal">ENGINEERING</p>
      </div>
      {/* Image + SVG */}
      <div className="relative w-full max-w-[1200px] flex justify-center">
        <img
          src={beaconOpen}
          alt="Beacon Internal"
          className="w-[35%] h-auto block"
        />

        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {rightComponents.map((c) => {
            const isActive = extendedLineRightId === c.id;
            const fullLength = extendedRightEndx - c.joint.x; // always total length
            const collapsedOffset = extendedRightEndx - baseRightEndx;
            return (
              <g key={c.id}>
                {/* Diagonal start → joint */}
                <line
                  x1={c.start.x}
                  y1={c.start.y}
                  x2={c.joint.x}
                  y2={c.joint.y}
                  stroke={isActive ? "#ffcc33" : "#d6d6d6"}
                  strokeWidth="0.3"
                  style={{
                    transition: "stroke 0.2s cubic-bezier(.74,.01,.4,.96)",
                    transitionDelay: isActive ? "0s" : "0.3s",
                  }}
                />

                {/* Horizontal line with draw animation */}
                <line
                  x1={c.joint.x}
                  y1={c.joint.y}
                  x2={extendedRightEndx} // always final end
                  y2={c.joint.y}
                  stroke={isActive ? "#ffcc33" : "#d6d6d6"}
                  strokeWidth="0.6"
                  strokeDasharray={fullLength} // full length
                  strokeDashoffset={isActive ? 0 : collapsedOffset} // hide the "extra" part
                  style={{
                    transition:
                      "stroke-dashoffset 0.7s cubic-bezier(.74,.01,.4,.96), stroke 0.2s cubic-bezier(.74,.01,.4,.96)",

                    transitionDelay: isActive ? "0s" : "0.3s",
                  }}
                />
              </g>
            );
          })}
          {leftComponents.map((c) => {
            const isActive = extendedLineLeftId === c.id;
            const fullLength = c.joint.x - extendedLeftEndx; // total line length, always positive
            const collapsedOffset = c.joint.x - fullLength + baseLeftEndx * 3;
            return (
              <g key={c.id}>
                {/* Diagonal start → joint */}
                <line
                  x1={c.start.x}
                  y1={c.start.y}
                  x2={c.joint.x}
                  y2={c.joint.y}
                  stroke={isActive ? "#ffcc33" : "#d6d6d6"}
                  strokeWidth="0.3"
                  style={{
                    transition: "stroke 0.2s cubic-bezier(.74,.01,.4,.96)",
                    transitionDelay: isActive ? "0s" : "0.3s",
                  }}
                />

                {/* Horizontal line with draw animation */}
                <line
                  x1={c.joint.x}
                  y1={c.joint.y}
                  x2={extendedLeftEndx} // always final end
                  y2={c.joint.y}
                  stroke={isActive ? "#ffcc33" : "#d6d6d6"}
                  strokeWidth="0.6"
                  strokeDasharray={fullLength} // full length
                  strokeDashoffset={isActive ? 0 : collapsedOffset} // hide the "extra" part
                  style={{
                    transition:
                      "stroke-dashoffset 0.7s cubic-bezier(.74,.01,.4,.96), stroke 0.2s cubic-bezier(.74,.01,.4,.96)",

                    transitionDelay: isActive ? "0s" : "0.3s",
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Labels */}
        {rightComponents.map((c) => {
          const isActive = extendedLineRightId === c.id;
          return (
            <div
              key={c.id}
              className="absolute text-sm whitespace-nowrap"
              style={{
                left: `${isActive ? extendedRightEndx : baseRightEndx}%`,
                color: isActive ? "#ffcc33" : "#d6d6d6",
                top: `${c.joint.y}%`,
                transform: "translate(0%, -47%)", // align left with the line
                transition: isActive
                  ? "left 0.7s cubic-bezier(.74,.01,.4,.96), color 0.2s cubic-bezier(.74,.01,.4,.96)" // fade-in delayed
                  : "left 0.7s cubic-bezier(.74,.01,.4,.96), color 0.2s cubic-bezier(.74,.01,.4,.96)", // fade-out delayed
                transitionDelay: isActive ? "0s" : "0.3s",
                cursor: "pointer",
              }}
              onClick={() =>
                setExtendedLineRightId((prev) => (prev === c.id ? null : c.id))
              }
            >
              {c.label}
              <IoIosArrowForward
                className="inline-block w-3 h-3"
                style={{
                  color: isActive ? "#ffcc33" : "#d6d6d6",
                  transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.5s ease-out",
                }}
              />
              <div
                className="mt-1 text-n text-[#d6d6d6] max-w-xs overflow-wrap"
                style={{
                  position: "absolute",
                  transform: isActive
                    ? "translate(-77%, -3%)"
                    : "translate(-77%, -10px)",
                  opacity: isActive ? 1 : 0,
                  transition: isActive
                    ? "opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s" // fade-in delayed
                    : "opacity 0.2s ease-out, transform 0.5s ease-out", // fade-out immediate

                  transitionDelay: isActive ? "0.8s" : "0s",
                  width: "20vw", // set fixed width
                  wordWrap: "break-word", // allow wrapping
                  whiteSpace: "normal", // normal wrapping behavior
                  cursor: isActive ? "pointer" : "default", // only show pointer when not active
                }}
                onClick={(e) => {
                  !isActive && e.stopPropagation();
                }}
              >
                {c.description}
              </div>
            </div>
          );
        })}
        {leftComponents.map((c) => {
          const isActive = extendedLineLeftId === c.id;
          return (
            <div
              key={c.id}
              className="absolute text-sm whitespace-nowrap"
              style={{
                left: `${isActive ? extendedLeftEndx : baseLeftEndx}%`,
                color: isActive ? "#ffcc33" : "#d6d6d6",
                top: `${c.joint.y}%`,
                transform: "translate(0%, -47%)", // align left with the line
                transition: isActive
                  ? "left 0.7s cubic-bezier(.74,.01,.4,.96), color 0.2s cubic-bezier(.74,.01,.4,.96)" // fade-in delayed
                  : "left 0.7s cubic-bezier(.74,.01,.4,.96), color 0.2s cubic-bezier(.74,.01,.4,.96)", // fade-out delayed
                transitionDelay: isActive ? "0s" : "0.3s",
                cursor: "pointer",
                background: "#252634", // add background for readability
              }}
              onClick={() =>
                setExtendedLineLeftId((prev) => (prev === c.id ? null : c.id))
              }
            >
              {c.label}
              <IoIosArrowForward
                className="inline-block w-3 h-3"
                style={{
                  color: isActive ? "#ffcc33" : "#d6d6d6",
                  transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.5s ease-out",
                }}
              />
              <div
                className="mt-1 text-n text-[#d6d6d6] max-w-xs overflow-wrap"
                style={{
                  position: "absolute",
                  transform: isActive
                    ? "translate(0%, -3%)"
                    : "translate(0%, -10px)",
                  opacity: isActive ? 1 : 0,
                  transition: isActive
                    ? "opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s" // fade-in delayed
                    : "opacity 0.2s ease-out, transform 0.5s ease-out", // fade-out immediate

                  transitionDelay: isActive ? "0.8s" : "0s",
                  width: "20vw", // set fixed width
                  wordWrap: "break-word", // allow wrapping
                  whiteSpace: "normal", // normal wrapping behavior
                  cursor: isActive ? "pointer" : "default", // only show pointer when not active
                }}
                onClick={(e) => {
                  !isActive && e.stopPropagation();
                }}
              >
                {c.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
