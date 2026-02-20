import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-12 w-full px-[10vw] gap-4">
      <p className="text-[3vw] font-semibold">SUPPORTERS</p>
      <p className="text-[1vw] font-semilight">
        We acknowledge and thank these organisations for their invaluable
        support which enabled the Beacon to reach new heights
      </p>
      <div className="flex flex-row flex-wrap justify-between gap-8 mt-8 w-full">
        <div>ASA</div>
        <div>ESA</div>
        <div>DLR</div>
        <div>InvNSW</div>
        <div>SSC</div>
        <div>SOMBO</div>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-[7vw] mt-20 w-full">
        <div className="flex-1 flex flex-col text-left gap-[2vw]">
          <div className="flex-1 flex flex-row gap-3">
            <p className="text-[3vw] font-bold">LET'S</p>
            <p className="text-[3vw] font-normal">FLY</p>
          </div>
          <p className="text-[1.4vw] font-semilight">
            Don't be left in the dark. Contact us to see how the ANT61 Beacon
            can take your next satellite mission to the next level!
          </p>
          <div className="flex-1 flex flex-row gap-[1.5vw]">
            <a
              href="https://www.linkedin.com/company/ant61"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-[2vw] h-[2vw] text-white hover:text-[#ffcc33] transition-colors duration-100" />
            </a>
            <a
              href="https://x.com/ANT61COM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-[2vw] h-[2vw] text-white hover:text-[#ffcc33] transition-colors duration-100" />
            </a>
            <a
              href="https://www.youtube.com/@ANT61"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-[2vw] h-[2vw] text-white hover:text-[#ffcc33] transition-colors duration-100" />
            </a>
            <a
              href="mailto:contact@ant61.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbMailFilled className="w-[2vw] h-[2vw] text-white hover:text-[#ffcc33] transition-colors duration-100" />
            </a>
          </div>
          <div className="flex-1 flex flex-col text-left gap-[2vw]">
            <a
              href="/careers"
              className="text-[1vw] font-light hover:text-[#ffcc33]"
            >
              Careers
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col text-left" >
          <p className="font-normal text-[0.9vw] pb-[0.2vw]">Name *</p>
          <input className="bg-[#1e202f] border-b border-[#1e202f] p-[0.5vw] focus:outline-none focus:border-[#ffcc33] transition-colors duration-100"></input>
          <p className="font-normal text-[0.9vw] pb-[0.2vw] pt-[1vw]">
            Email *
          </p>
          <input className="bg-[#1e202f] border-b border-[#1e202f] p-[0.5vw] focus:outline-none focus:border-[#ffcc33] transition-colors duration-100"></input>
          <p className="font-normal text-[0.9vw] pb-[0.2vw] pt-[1vw]">
            Message
          </p>
          <textarea className="bg-[#1e202f] border-b border-[#1e202f] h-[5vw] resize-none p-[0.5vw] overflow-y-auto focus:outline-none focus:border-[#ffcc33] transition-colors duration-100"></textarea>
          <button className="border-2 border-[#ffcc33] text-[#ffcc33] mt-[1vw] text-white text-[1.2vw] py-[0.8vw] px-[2vw] hover:bg-[#ffcc33] hover:text-[#252634] transition-colors duration-200">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
