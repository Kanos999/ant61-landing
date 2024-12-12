import { Html, Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState, useRef, useLayoutEffect } from 'react';

export const Overlay = ({ setWireframeOpacity }) => {
  const scroll = useScroll();

  useFrame(() => {
    setWireframeOpacity(1 - scroll.range(0, 1/10));
  }, []);

  return (
    <Scroll html>
      {/* Section 1 */}
      <div className="z-30 w-[100vw] h-[100vh] border-bottom-[#252634] p-24 flex flex-row justify-between" >
        {/* <div className="font-bold text-black w-1/3 text-[36pt] text-right">Header 1</div>
        <div className="font-bold text-gray-200 w-1/3">Some more information here</div> */}
      </div>

      {/* Section 2 */}
      <div className="z-30 w-[100vw] h-[100vh] border-[#252634] bg-ant-yellow shadow-xl" >
        <div className="px-36 text-ant-navy font-bold ml-auto w-1/2 h-full flex flex-col">
          <div className="ml-auto mr-auto p-4 m-8 border border-[#252634]/60 rounded-xl text-[18pt] font-bold">
            Real-time 2-way communication
            <div className="font-normal text-[14pt] text-gray-700 mt-2">
              Stay connected no matter where you are. Our beacon ensures seamless communication, enabling instant 
              updates and responses when it matters most.
            </div>  
          </div>
          <div className="ml-auto mr-auto p-4 m-8 border border-[#252634]/60 rounded-xl text-[18pt] font-bold">
            Accurate positioning & state estimation
            <div className="font-normal text-[14pt] text-gray-700 mt-2">
              Know exactly where you are and how you're performing. With cutting-edge technology, our beacon provides 
              unparalleled accuracy in location and status tracking.
            </div>
          </div>
          <div className="ml-auto mr-auto p-4 m-8 border border-[#252634]/60 rounded-xl text-[18pt] font-bold">
            Double-redundant independent power
            <div className="font-normal text-[14pt] text-gray-700 mt-2">
              Reliability you can trust. Dual power systems guarantee continuous operation, even in the most demanding environments.
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="z-30 w-[100vw] h-[100vh] border border-blue-400 p-24 flex flex-row justify-between" >
        <div className="font-bold text-gray-200 w-1/3 h-full">
          <div className="rounded-2xl backdrop-blur-sm bg-[#252634]/20 border border-[#252634]/60 w-full h-full p-12 text-2xl">
            Some features and benefits:
            <ul className="list-disc pl-8 pt-4 leading-10 text-lg">
              <li>Idk list something</li>
              <li>blah blah blah</li>
              <li>yeet yeet skadeet</li>
              <li>...........</li>
            </ul>
          </div>
        </div>
        <div className="font-bold text-white w-1/3 text-[36pt]">Header 3</div>
      </div>

      {/* Section 4 */}
      <div className="z-30 w-[100vw] h-[100vh] border border-red-400 p-24 flex flex-row justify-between">
        <div className="font-bold text-white w-1/3 text-[36pt] text-right">Header 4</div>
        <div className="font-bold text-gray-200 w-1/3">Some more information here</div>
      </div>

      {/* Section 5 */}
      <div className="z-30 w-[100vw] h-[100vh] border border-green-400 p-24 flex flex-row justify-between">
        <div className="font-bold text-gray-200 w-1/3 text-right">Some more information here</div>
        <div className="font-bold text-white w-1/3 text-[36pt]">Header 5</div>
      </div>

      {/* Section 6 */}
      <div className="z-30 w-[100vw] h-[100vh] border border-blue-400 p-24 flex flex-row justify-between">
        <div className="font-bold text-white w-1/3 text-[36pt] text-right">Header 6</div>
        <div className="font-bold text-gray-200 w-1/3">Some more information here</div>
      </div>

      {/* Section 7 */}
      <div className="z-30 w-[100vw] h-[100vh] border border-red-400 p-24 flex flex-row justify-between">
        <div className="font-bold text-gray-200 w-1/3 text-right">Some more information here</div>
        <div className="font-bold text-white w-1/3 text-[36pt]">Header 7</div>
      </div>

      {/* Section 8 */}
      <div className="z-30 w-[100vw] h-[100vh] border border-green-400 p-24 flex flex-row justify-between">
        <div className="font-bold text-white w-1/3 text-[36pt] text-right">Header 8</div>
        <div className="font-bold text-gray-200 w-1/3">Some more information here</div>
      </div>

      {/* Section 9 */}
      <div className="z-30 w-[100vw] h-[100vh] border border-blue-400 p-24 flex flex-row justify-between" >
        <div className="font-bold text-gray-200 w-1/3 text-right">Some more information here</div>
        <div className="font-bold text-white w-1/3 text-[36pt]">Header 9</div>
      </div>

      {/* Section 10 */}
      <div className="z-30 w-[100vw] h-[100vh] border border-red-400 p-24 flex flex-row justify-between" >
        <div className="font-bold text-white w-1/3 text-[36pt] text-right">Header 10</div>
        <div className="font-bold text-gray-200 w-1/3">Some more information here</div>
      </div>

    </Scroll>
  );
}