import { useState } from "react";
import beaconOpen from "../../../public/beacon-open.png";
import { IoIosArrowForward } from "react-icons/io";

const baseRightEndx = 78;
const extendedRightEndx = 106;
const baseLeftEndx = 15;
const extendedLeftEndx = -13;

const components = [
  {
    id: 2,
    start: { x: 46, y: 43 },
    joint: { x: 70, y: -12 },
    svgArray: [
      { x: 42.2, y: 46 },
      { x: 47.4, y: 34 },
      { x: 50.7, y: 42 },
      { x: 45.5, y: 54 },
      { x: 42.2, y: 46 },
      { x: 42.2, y: 48 },
      { x: 45.5, y: 56 },
      { x: 45.5, y: 54 },
      { x: 50.7, y: 42 },
      { x: 50.7, y: 44 },
      { x: 45.5, y: 56 },
      { x: 45.5, y: 54 },
    ],
    svgArray2: [
      { x: 46, y: 55.3 },
      { x: 51.2, y: 42.8 },
      { x: 52.8, y: 46.4 },
      { x: 47.7, y: 59.2 },
      { x: 46, y: 55.3 },
      { x: 46, y: 57.3 },
      { x: 47.2, y: 60.4 },
      { x: 47.7, y: 59.2 },
      { x: 46, y: 55.3 },
    ],
    side: "right",
    label: "Telemetry",
    description:
      "Providing comprehensive telemetry and data collection, the Beacon offers a wide range of data points including orbital parameters, attitude information, radiation events, temperature, vibrations, and power bus characteristics. It can operate autonomously, collecting and transmitting data independently, or seamlessly integrate with your existing satellite systems to collect additional telemetry from the satellite bus.",
  },
  {
    id: 3,
    start: { x: 52, y: 36 },
    joint: { x: 70, y: -5 },
    svgArray: [
      { x: 48, y: 32.7 },
      { x: 48, y: 34.9 },
      { x: 52.8, y: 46.7 },
      { x: 53.3, y: 45 },
      { x: 48, y: 32.7 },
      { x: 50.1, y: 27.9 },
      { x: 55.5, y: 39.8 },
      { x: 53.3, y: 45 },
      { x: 48, y: 32.9 },
    ],
    svgArray2: [
      { x: 50.5, y: 26.7 },
      { x: 52.6, y: 22.2 },
      { x: 57.8, y: 33.5 },
      { x: 55.9, y: 38.3 },
      { x: 50.5, y: 26.7 },
      { x: 50.5, y: 28.5 },
      { x: 55.4, y: 39.6 },
      { x: 56, y: 38.5 },
      { x: 50.5, y: 26.7 },
    ],
    side: "right",
    label: "Diagnostics",
    description:
      "ANT61 Beacon provides robust anomaly diagnostics and recovery capabilities, independent of the primary satellite CDHS. With flexible options for telemetry and data integration, it supports your choice of bus or offers complete component integration for seamless operation. In the unlikely event of a satellite anomaly, the ANT61 Beacon ensures rapid diagnosis and efficient recovery, empowering mission assurance and satellite performance.",
  },
  {
    id: 4,
    start: { x: 60, y: 36 },
    joint: { x: 74, y: 2 },
    svgArray: [
      { x: 34.6, y: 35.9 },
      { x: 34.8, y: 34 },
      { x: 35, y: 32.6 },
      { x: 35.2, y: 31.5 },
      { x: 35.7, y: 31.7 },
      { x: 36.2, y: 32.6 },
      { x: 36.6, y: 33.5 },
      { x: 37.3, y: 35.2 },
      { x: 37.6, y: 35.4 },
      { x: 38.4, y: 43.8 },
      { x: 39.3, y: 46.6 },
      { x: 49.8, y: 23.7 },
      { x: 50.2, y: 22.3 },
      { x: 50.5, y: 19.5 },
      { x: 51, y: 17.2 },
      { x: 50.4, y: 8.3 },
      { x: 50.2, y: 7.8 },
      { x: 49.6, y: 7.4 },
      { x: 49.1, y: 6 },
      { x: 48.5, y: 5 },
      { x: 48, y: 5 },
      { x: 35.1, y: 31.7 },
      { x: 34.6, y: 35.9 },
      { x: 35.5, y: 38.1 },
      { x: 36.4, y: 38.8 },
      { x: 38.4, y: 43.8 },
      { x: 37.6, y: 35.4 },
      { x: 37.3, y: 35.2 },
      { x: 36.6, y: 33.5 },
      { x: 36.2, y: 32.6 },
      { x: 35.7, y: 31.7 },
      { x: 35.2, y: 31.5 },
    ],
    svgArray2: [
      { x: 60.1, y: 28.4 },
      { x: 60.6, y: 29.8 },
      { x: 61, y: 30.7 },
      { x: 61.5, y: 31.7 },
      { x: 62, y: 32.6 },
      { x: 62.8, y: 35.6 },
      { x: 63.4, y: 40.6 },
      { x: 63.8, y: 43.6 },
      { x: 51.2, y: 78.4 },
      { x: 50.7, y: 72.8 },
      { x: 50.4, y: 70.4 },
      { x: 49.9, y: 67.2 },
      { x: 49.1, y: 64.8 },
      { x: 48.5, y: 63.9 },
      { x: 48, y: 62.5 },
      { x: 47.3, y: 60.6 },
      { x: 46.5, y: 64.8 },
      { x: 49.1, y: 71.8 },
      { x: 49.2, y: 73.7 },
      { x: 50.6, y: 77.9 },
      { x: 51.1, y: 78.4 },
      { x: 50.9, y: 75.6 },
      { x: 50.8, y: 73.2 },
      { x: 50.4, y: 70 },
      { x: 50, y: 67.6 },
      { x: 49.3, y: 65.3 },
      { x: 49.3, y: 65.3 },
      { x: 48.7, y: 64.4 },
      { x: 48.2, y: 63 },
      { x: 47.8, y: 62 },
      { x: 47.3, y: 60.2 },
    ],
    side: "right",
    label: "Power",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
  {
    id: 7,
    start: { x: 41, y: 57 },
    joint: { x: 23, y: 98 },
    svgArray: [
      { x: 39.1, y: 49.6 },
      { x: 38.6, y: 48.5 },
      { x: 38.3, y: 48.6 },
      { x: 38.1, y: 49.6 },
      { x: 38.1, y: 51 },
      { x: 38.3, y: 53.1 },
      { x: 38.7, y: 54.5 },
      { x: 39.1, y: 55.5 },
      { x: 39.4, y: 57.3 },
      { x: 41.4, y: 62.5 },
      { x: 41.6, y: 62.2 },
      { x: 42, y: 63.7 },
      { x: 42.3, y: 64.3 },
      { x: 42.5, y: 64.1 },
      { x: 42.6, y: 63 },
      { x: 42.7, y: 61.6 },
      { x: 42.6, y: 60.2 },
      { x: 42.4, y: 58.8 },
      { x: 41.9, y: 57.3 },
      { x: 41.4, y: 55.9 },
      { x: 41.3, y: 54.8 },
      { x: 39.4, y: 49.6 },
      { x: 39.2, y: 49.6 },
    ],
    side: "left",
    label: "Integration",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
  {
    id: 8,
    start: { x: 45, y: 67 },
    joint: { x: 29, y: 105 },
    svgArray: [
      { x: 43.2, y: 66.4 },
      { x: 42.8, y: 62.1 },
      { x: 43.1, y: 59.2 },
      { x: 46.3, y: 67.8 },
      { x: 46.6, y: 71.6 },
      { x: 45.9, y: 73.6 },
      { x: 43.2, y: 66.4 },
    ],
    side: "left",
    label: "Communication",
    description:
      "The Beacon is equipped with an independent battery, ensuring continued operation for up to one week in the event of satellite power loss. This guarantees reliable anomaly diagnostics and recovery, even when the primary satellite systems are offline, providing mission-critical assurance during unforeseen power failures.",
  },
];

export function BeaconInternal() {
  const [clickCoords, setClickCoords] = useState([]);
  const [extendedLineId, setExtendedLineId] = useState(null);

  const handleImageClick = (e) => {
    const svg = e.currentTarget.parentElement.querySelector("svg");

    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;

    const svgPoint = pt.matrixTransform(svg.getScreenCTM().inverse());

    const rounded = {
      x: Number(svgPoint.x.toFixed(1)),
      y: Number(svgPoint.y.toFixed(1)),
    };

    console.log(rounded);

    setClickCoords((prev) => [...prev, rounded]);
  };

  const downloadCoords = () => {
    const textContent = clickCoords
      .map((p) => `{ x: ${p.x}, y: ${p.y} }`)
      .join("\n");

    const blob = new Blob([textContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "click-coordinates.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const rightComponents = components.filter((c) => c.side === "right");
  const leftComponents = components.filter((c) => c.side === "left");

  const getSVGCoordsFromImageClick = (e) => {
    const svg = e.currentTarget.parentElement.querySelector("svg");

    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;

    const svgPoint = pt.matrixTransform(svg.getScreenCTM().inverse());

    console.log("SVG X:", svgPoint.x);
    console.log("SVG Y:", svgPoint.y);

    return { x: svgPoint.x, y: svgPoint.y };
  };

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
          onClick={(e) => handleImageClick(e)}
        />

        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {components.map((c) => {
            const pointsString = c.svgArray
              .map((p) => `${p.x},${p.y}`)
              .join(" ");
            if (c.svgArray2) {
              const pointsString2 = c.svgArray2
                .map((p) => `${p.x},${p.y}`)
                .join(" ");
              return (
                <>
                  <polygon
                    key={c.id}
                    points={pointsString}
                    fill="#ffcc3356"
                    stroke="#ffcc33"
                    strokeWidth="0.3"
                    onClick={() =>
                      setExtendedLineId((prev) => (prev === c.id ? null : c.id))
                    }
                    cursor="pointer"
                  />
                  <polygon
                    key={c.id}
                    points={pointsString2}
                    fill="#ffcc3356"
                    stroke="#ffcc33"
                    strokeWidth="0.3"
                    onClick={() =>
                      setExtendedLineId((prev) => (prev === c.id ? null : c.id))
                    }
                    cursor="pointer"
                  />
                </>
              );
            } else {
              return (
                <polygon
                  key={c.id}
                  points={pointsString}
                  fill="#ffcc3356"
                  stroke="#ffcc33"
                  strokeWidth="0.3"
                  onClick={() =>
                    setExtendedLineId((prev) => (prev === c.id ? null : c.id))
                  }
                  cursor="pointer"
                  
                />
              );
            }
          })}

          {rightComponents.map((c) => {
            const isActive = extendedLineId === c.id;
            const fullLength = extendedRightEndx - c.joint.x; // always total length
            const collapsedOffset = extendedRightEndx - baseRightEndx;
            const pathD = `
                M ${c.start.x} ${c.start.y}
                L ${c.joint.x} ${c.joint.y}
                L ${extendedRightEndx} ${c.joint.y}
              `;
            return (
              <g key={c.id}>
                {/* Diagonal start → joint */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={isActive ? "#ffcc33" : "#d6d6d6"}
                  strokeWidth="0.2"
                  ref={(el) => {
                    if (el) {
                      const length = el.getTotalLength();
                      el.style.strokeDasharray = length;
                      el.style.strokeDashoffset = isActive ? 0 : length;
                    }
                  }}
                  style={{
                    transition:
                      "stroke-dashoffset 0.8s cubic-bezier(.74,.01,.4,.96), stroke 0.2s",
                  }}
                />
              </g>
            );
          })}
          {leftComponents.map((c) => {
            const isActive = extendedLineId === c.id;
            const fullLength = c.joint.x - extendedLeftEndx; // total line length, always positive
            const collapsedOffset = c.joint.x - fullLength + baseLeftEndx * 3;
            const pathD = `
                M ${c.start.x} ${c.start.y}
                L ${c.joint.x} ${c.joint.y}
                L ${extendedLeftEndx} ${c.joint.y}
              `;
            return (
              <g key={c.id}>
                {/* Diagonal start → joint */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={isActive ? "#ffcc33" : "#d6d6d6"}
                  strokeWidth="0.2"
                  ref={(el) => {
                    if (el) {
                      const length = el.getTotalLength();
                      el.style.strokeDasharray = length;
                      el.style.strokeDashoffset = isActive ? 0 : length;
                    }
                  }}
                  style={{
                    transition:
                      "stroke-dashoffset 0.8s cubic-bezier(.74,.01,.4,.96), stroke 0.2s",
                  }}
                  shapeRendering="geometricPrecision"
                />
              </g>
            );
          })}
        </svg>

        {/* Labels */}
        {rightComponents.map((c) => {
          const isActive = extendedLineId === c.id;
          return (
            <div
              key={c.id}
              className="absolute text-sm whitespace-nowrap"
              style={{
                left: `${isActive ? extendedRightEndx : c.joint.x}%`,
                color: isActive ? "#ffcc33" : "#d6d6d6",
                opacity: `${isActive ? 1:0}`,
                top: `${c.joint.y}%`,
                transform: "translate(0%, -47%)", // align left with the line
                transition: isActive
                  ? "left 0.7s cubic-bezier(.74,.01,.4,.96), color 0.2s cubic-bezier(.74,.01,.4,.96), opacity 0.3s ease-in" // fade-in delayed
                  : "left 0.5s cubic-bezier(.74,.01,.4,.96), color 0.2s cubic-bezier(.74,.01,.4,.96), opacity 0.3s ease-in", // fade-out delayed
                transitionDelay: isActive ? "0.15s" : "0s",
                cursor: isActive ? "pointer" : "default",
                
              }}
              onClick={() =>
                isActive && setExtendedLineId((prev) => (prev === c.id ? null : c.id))
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

                  transitionDelay: isActive ? "0.55s" : "0s",
                  width: "20vw", // set fixed width
                  wordWrap: "break-word", // allow wrapping
                  whiteSpace: "normal", // normal wrapping behavior
                  cursor: isActive ? "pointer" : "default", // only show pointer when not active
                  pointerEvents: isActive ? "auto" : "none",
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
          const isActive = extendedLineId === c.id;
          return (
            <div
              key={c.id}
              className="absolute text-sm whitespace-nowrap"
              style={{
                left: `${isActive ? extendedLeftEndx : baseLeftEndx}%`,
                color: isActive ? "#ffcc33" : "#d6d6d6",
                background: "#252634",
                opacity: `${isActive ? 1:0}`,
                top: `${c.joint.y}%`,
                transform: "translate(0%, -47%)", // align left with the line
                transition: isActive
                  ? "left 0.5s cubic-bezier(.74,.01,.4,.96), color 0.2s cubic-bezier(.74,.01,.4,.96), opacity 0.3s ease-in" // fade-in delayed
                  : "left 0.5s cubic-bezier(.74,.01,.4,.96), color 0.2s cubic-bezier(.74,.01,.4,.96), opacity 0.3s ease-in", // fade-out delayed
                transitionDelay: isActive ? "0.2s" : "0.09s",
                cursor: isActive ? "pointer" : "default",
                
              }}
              onClick={() =>
                isActive && setExtendedLineId((prev) => (prev === c.id ? null : c.id))
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

                  transitionDelay: isActive ? "0.4s" : "0s",
                  width: "20vw", // set fixed width
                  wordWrap: "break-word", // allow wrapping
                  whiteSpace: "normal", // normal wrapping behavior
                  pointerEvents: isActive ? "auto" : "none",
                  cursor: isActive ? "pointer" : "default", // only show pointer when not active
                  zIndex: 0
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
