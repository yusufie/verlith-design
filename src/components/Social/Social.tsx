import React from "react";
import Image from "next/image";
import style from "./social.module.scss";

function Social() {
  return (
    <>
      <div className={style.heroTitleContainer}>
        <h1> AI-POWERED CREATOR ECONOMY </h1>
      </div>

      <div className={style.radialGradient}>
        <div className={style.radialGradientEffect}></div>
        <div className={style.radialGradientEffectLight}></div>
      </div>

      <div className={style.frame}>

        <div>
          <p className={style.from}>from</p>
          <h1>WEB2</h1>
          <p className={style.to}>to</p>
          <h1>WEB3</h1>
        </div>

        <div className={style.socialContainer} >
          <ul>
            <li>
              <Image
                src="/icons/point-pink.svg" alt="discord" width={24} height={24} />
              <button className={style.social}> {" "}
                <span>join discord server</span>
              </button>
            </li>
            <li>
              <Image src="/icons/point-pink.svg" alt="telegram" width={24} height={24} />
              <button className={style.social}> {" "}
                <span>join telegram channel</span>
              </button>
            </li>
            <li>
              <Image src="/icons/point-pink.svg" alt="mail" width={24} height={24} />
              <button className={style.social}>
              <span>e-mail address</span>
              </button>
            </li>
            <li>
              <Image src="/icons/point-blue.svg" alt="invitation" width={24} height={24} />
              <button className={style.socialButton}>
              <span>request an invitation code</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Social;
