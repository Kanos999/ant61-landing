import { BeaconInternal } from "../components/beacon-internal/BeaconInternal";
import { BeaconVariantsTable } from "../components/BeaconVariantsTable";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function BeaconPage() {
  return (
    <div className="bg-[#252634] min-h-screen text-white">
      <Header />
      <BeaconInternal />
      <BeaconVariantsTable />
      <Footer/>
    </div>
  );
}
