import React from "react";
import Image from "next/image";
import "../styles/hero.css";

function Hero() {
  return (
    <>
      <div className="flex flex-row ms-36 me-60 md:ms-16 xs:ms-10" id="heroContainer">
        <div className="content">
          <div className="content__container">
            <p className="content__container__text">YOUR</p>

            <ul className="content__container__list">
              <li className="content__container__list__item">CONTENT</li>
              <li className="content__container__list__item">DATA</li>
              <li className="content__container__list__item">INCOME</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="flex justify-start text-start h-64 ms-36 me-72 md:ms-16 md:me-36 xs:ms-10"
        id="heroGlassContainer"
      >
        <div className="p-8 md:p-4 xs:p-2" style={{ fontFamily: 'Space Grotesk' , fontWeight: '500' }}>

          <div className=" h-28 md:h-24 xs:h-20">
            <p className="text-4xl text-white mb-2 md:text-xl xs:text-lg" >
              Unleash the power of
            </p>
            <p className="text-4xl text-white mt-2 md:text-xl xs:text-lg">
              content creation on VERLITH.
            </p>
          </div>

          <button className="flex flex-row items-center gap-4 py-4 md:py-2 xs:py-1" >
            <span className=" text-lg text-gray-300 md:text-sm xs:text-xs">Read whitepaper</span>
            <Image
              src="/icons/arrow-right-long.svg"
              alt="arrow"
              width={36}
              height={36}
            />
          </button>

          <Image
            src="/icons/point-blue.svg"
            alt="point"
            width={24}
            height={24}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
