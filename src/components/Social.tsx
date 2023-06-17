import React from "react";
import Image from "next/image";
import "../styles/social.css";

function Social() {
  return (
    <>
      <div className="flex flex-row justify-center text-center my-24 md:my-12 xs:my-8">
        <h1 className=" text-4xl font-bold md:text-xl xs:text-lg" id="heroTitle">
          AI-POWERED CREATOR ECONOMY
        </h1>
      </div>

      <div className="radialGradient">
        <div className='radialGradientEffect'></div>
        <div className='radialGradientEffectLight'></div>
      </div>

      <div className="flex flex-row justify-center mb-40 gap-16 z-100 md:mt-12 md:mb-20 md:gap-8 xs:mt-8 xs:mb-14 xs:gap-4">
        <div>
          <p className=" text-4xl font-bold text-white md:text-2xl xs:text-lg">from</p>
          <h1 className="text-6xl font-bold text-white md:text-3xl xs:text-2xl" id="webTwo">
            W E B 2
          </h1>
          <p className="text-4xl font-bold text-white md:text-2xl">to</p>
          <h1 className="text-6xl font-bold text-white md:text-3xl" id="webThree">
            W E B 3
          </h1>
        </div>

        <div className=" w-80 md:w-64 xs:w-56" id="socialContainer">
          <ul className="list-none">
            <li className="flex flex-row items-center mx-4 md:mx-2 xs:mx-1">
              <Image
                src="/icons/point-pink.svg"
                alt="discord"
                width={24}
                height={24}
                className="me-4 my-3 md:me-2 md:my-2 xs:me-1 xs:my-1"
              />
              <button className="social text-left text-gray-400 w-64 md:w-56 xs:w-48">
                {" "}
                <span className="ps-4 font-light md:text-sm md:ps-2 xs:text-xs xs:ps-1">join discord server</span>
              </button>
            </li>
            <li className="flex flex-row items-center mx-4 md:mx-2 xs:mx-1">
              <Image
                src="/icons/point-pink.svg"
                alt="telegram"
                width={24}
                height={24}
                className="me-4 my-3 md:me-2 md:my-2 xs:me-1 xs:my-1"
              />
              <button className="social text-left text-gray-400 w-64 md:w-56 xs:w-48">
                {" "}
                <span className="ps-4 font-light md:text-sm md:ps-2 xs:text-xs xs:ps-1">join telegram channel</span>
              </button>
            </li>
            <li className="flex flex-row items-center mx-4 md:mx-2 xs:mx-1">
              <Image
                src="/icons/point-pink.svg"
                alt="mail"
                width={24}
                height={24}
                className="me-4 my-3 md:me-2 md:my-2 xs:me-1 xs:my-1"
              />
              <button className="social text-left text-gray-400 w-64 md:w-56 xs:w-48">
              <span className="ps-4 font-light md:text-sm md:ps-2 xs:text-xs xs:ps-1">e-mail address</span>
              </button>
            </li>
            <li className="flex flex-row items-center mx-4 md:mx-2 xs:mx-1">
              <Image
                src="/icons/point-blue.svg"
                alt="invitation"
                width={24}
                height={24}
                className="me-4 my-3 md:me-2 md:my-2 xs:me-1 xs:my-1"
              />
              <button className="text-left text-gray-300 w-64 md:w-56 xs:w-48" id="socialButton">
              <span className="ps-4 font-light md:text-sm md:ps-2 xs:text-xs xs:ps-1">request an invitation code</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Social;
