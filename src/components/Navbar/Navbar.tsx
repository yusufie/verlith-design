"use client";
import React, { useState } from "react";
import style from "./navbar.module.scss";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.navbar}>
      <div className={style.navbarLeft}>
        <nav>VERLITH</nav>
      </div>

      <div className={style.navbarRight}>
        <div className={style.navbarDropdown}>
          <button className={style.explore} onClick={toggleDropdown}>
            Explore
            <Image
              src="/icons/arrow-down.svg"
              alt="arrow"
              width={12}
              height={12}
              priority
            />
          </button>

          {isOpen && (
            <div className={style.dropdownMenu}>
              <ul>
                <li>
                  <button>
                    <Image
                      src="/icons/users.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                      priority
                    />
                    <nav>About</nav>
                  </button>
                </li>

                <li>
                  <button>
                    <Image
                      src="/icons/suitcase.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                      priority
                    />
                    <nav>Careers</nav>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <nav className={style.nft}>NFT</nav>

        <nav className={style.enterprise}>Enterprise</nav>

        <button>
          <nav className={style.connectButton}>
            Connect
          </nav>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
