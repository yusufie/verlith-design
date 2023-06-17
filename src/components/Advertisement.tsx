import React from "react";
import "../styles/advertisement.css";
import Image from "next/image";

function Advertisement() {
  return (
    <div className="mt-48 md:pt-48 md:mt-4" id="advertisementContainer">

      <div className="flex flex-row justify-center text-center  pb-6 md:pb-3">
        <h1 className="text-5xl font-medium text-white pb-12 md:text-2xl md:pb-6 xs:text-xl" id="cardsTitle" style={{ fontFamily: 'Space Grotesk' , fontWeight: '500' }}>
        Interactive Advertisement
        </h1>
      </div>

      <div className="flex justify-start text-start mx-40 md:mx-20 xs:mx-10"
        id="footerGlassContainer"
      >
        <div className=" px-8 pt-8 pb-4 md:p-4 xs:p-2" style={{ fontFamily: 'Space Grotesk' , fontWeight: '400' }}>
          <p className="text-4xl text-gray-100 mb-2 md:text-lg md:mb-0 xs:text-base">
          Instant action
          </p>
          <p className="text-4xl text-gray-100 mt-2 md:text-lg md:mt-0 xs:text-base">
          Less effort
          </p>
          <p className="text-4xl text-gray-100 mt-2 md:text-lg md:mt-0 xs:text-base">
          High return
          </p>

          <button className="flex flex-row items-center gap-4 mt-10 mb-4 md:my-2 xs:my-1">
            <span className=" text-xl text-gray-300 md:text-sm xs:text-xs">Request a presentation</span>
            <Image
              src="/icons/arrow-right-long.svg"
              alt="arrow"
              width={36}
              height={36}
            />
          </button>
          
            <Image
              src="/icons/point-pink.svg"
              alt="point"
              width={24}
              height={24}
            />
          </div>
      </div>

      <div className="Gradient">
        <div className='GradientEffect'></div>
        <div className='GradientEffectLight'></div>
      </div>

      <div className="flex flex-row justify-center text-center py-32">
        <h1 className="text-4xl font-bold tracking-widest text-black py-12" id="verlithTitle">
      {/* VERLITH */}
        </h1>
      </div>
    </div>
  );
}

export default Advertisement;
