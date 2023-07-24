import React from "react";
import Image from "next/image";
import style from "./hero.module.scss";

function Hero() {
  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.content}>
          <div className={style.contentContainer}>
            <p className={style.contentContainerText}>YOUR</p>

            <ul className={style.contentContainerList}>
              <li className={style.contentContainerListitem}>CONTENT</li>
              <li className={style.contentContainerListitem}>DATA</li>
              <li className={style.contentContainerListitem}>INCOME</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.heroGlassContainer}>
        <div className={style.heroGlass}>
          <div className={style.glass}>
            <p> Unleash the power of </p>
            <p> content creation on VERLITH. </p>
          </div>

          <button className={style.whitepaperButton}>
            <span> Read whitepaper </span>
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
