import { Header } from "../components/Header";
import {advisors, coreTeam} from "../lib/consts";




export function AboutPage() {
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
    </div>
  );
}
