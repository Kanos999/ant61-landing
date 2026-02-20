import beaconOpen from "../../../public/beacon-open.png";

export function BeaconInternal() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <img
        src={beaconOpen}
        alt="Beacon Internal"
        className="w-[30vw] h-auto"
      />
    </div>
  );
}
