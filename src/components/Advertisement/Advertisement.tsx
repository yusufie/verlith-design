import React from "react";
import style from "./advertisement.module.scss";
import Image from "next/image";


function Advertisement() {
  return (
    <div className={style.advertisementContainer} >

      <div className={style.advertisementTitle} >
        <h1> Interactive Advertisement </h1>
      </div>

      <div className={style.footerGlassContainer} >
        <div className={style.footerGlass} >
          <p> Instant action </p>
          <p> Less effort </p>
          <p> High return </p>

          <button className={style.presentationButton}>
            <span>Request a presentation</span>
            <Image src="/icons/arrow-right-long.svg" alt="arrow" width={36} height={36} />
          </button>
          
          <Image src="/icons/point-pink.svg" alt="point" width={24} height={24} />

          </div>
      </div>

      <div className={style.gradient}>
        <div className={style.gradientEffect}></div>
        <div className={style.gradientEffectLight}></div>
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
