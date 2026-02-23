import { BeaconInternal } from "../components/beacon-internal/BeaconInternal";
import { BeaconVariantsTable } from "../components/BeaconVariantsTable";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const beaconUseCases = [
  {
    title: "Satellite Recovery",
    description:
      "In the event of a satellite anomaly, the ANT61 Beacon serves as a critical backup communication system, restoring functionality even when the primary systems fail. It independently collects and transmits real-time telemetry, allowing mission control to diagnose the issue, issue recovery commands, and regain control of the satellite. Additionally, the Beacon’s inter-satellite communication capabilities enable continuous two-way data exchange, ensuring connectivity with other satellites in the constellation for coordinated recovery efforts.",
    imageURL: "/public/beacon_diagram1.png",
    orientation: "left",
  },
    {
    title: "Satellite Recovery",
    description:
      "In the event of a satellite anomaly, the ANT61 Beacon serves as a critical backup communication system, restoring functionality even when the primary systems fail. It independently collects and transmits real-time telemetry, allowing mission control to diagnose the issue, issue recovery commands, and regain control of the satellite. Additionally, the Beacon’s inter-satellite communication capabilities enable continuous two-way data exchange, ensuring connectivity with other satellites in the constellation for coordinated recovery efforts.",
    imageURL: "/public/beacon_diagram1.png",
    orientation: "right",
  },
];

export function BeaconPage() {
  return (
    <div className="bg-[#252634] min-h-screen text-white">
      <Header />
      <BeaconInternal />
      <BeaconVariantsTable />
      <div className="flex flex-col items-center justify-center py-[4vw] w-full px-[10vw] gap-4">
        <div className="flex-1 flex flex-row gap-3">
          <p className="text-[3vw] font-bold">BEACON</p>
          <p className="text-[3vw] font-normal">USE CASES</p>
        </div>
        <p className="text-[1.4vw] font-semilight text-center w-[60%]">
          The Beacon enhances satellite performance, ensures mission success,
          and provides robust recovery solutions across a variety of operational
          scenarios.
        </p>
        {beaconUseCases.map((useCase, index) => (
          <div
            key={index}
            className={`flex flex-col mt-[3vw] md:flex-row w-full bg-[#2e2f41] ${useCase.orientation === "right" ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={useCase.imageURL}
                alt={useCase.title}
                className="w-full h-auto rounded-lg"
                style={{objectFit: "contain"}}
              />
            </div>
            <div className="w-full md:w-1/2 p-[2vw]">
              <h3 className="text-[1.8vw] font-bold">{useCase.title}</h3>
              <p className="text-[1.2vw] font-semilight">
                {useCase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
