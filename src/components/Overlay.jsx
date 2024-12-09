import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState, useRef, useLayoutEffect } from 'react';


export const Overlay = () => {
  const scroll = useScroll();
  const [opacity, setOpacity] = useState(1);

  useFrame(() => {
    setOpacity(scroll.range(2/3, 1/3));
  }, []);

  return (
    <Scroll html>
      <div className="z-30 mt-[100vh] w-[100vw] h-[100vh]" style={{opacity: opacity}}>
        <div className="p-12 pl-36 text-gray-100 font-bold ml-auto w-1/2 h-full flex flex-col">
          <div className="ml-auto mr-auto p-4 m-8 border border-[#252634]/60 rounded-xl text-[18pt] font-bold">
            Real-time 2-way communication
            <div className="font-normal text-[14pt] text-gray-400 mt-2">
              Stay connected no matter where you are. Our beacon ensures seamless communication, enabling instant 
              updates and responses when it matters most.
            </div>  
          </div>
          <div className="ml-auto mr-auto p-4 m-8 border border-[#252634]/60 rounded-xl text-[18pt] font-bold">
            Accurate positioning & state estimation
            <div className="font-normal text-[14pt] text-gray-400 mt-2">
              Know exactly where you are and how you're performing. With cutting-edge technology, our beacon provides 
              unparalleled accuracy in location and status tracking.
            </div>
          </div>
          <div className="ml-auto mr-auto p-4 m-8 border border-[#252634]/60 rounded-xl text-[18pt] font-bold">
            Double-redundant independent power
            <div className="font-normal text-[14pt] text-gray-400 mt-2">
              Reliability you can trust. Dual power systems guarantee continuous operation, even in the most demanding environments.
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  );
}