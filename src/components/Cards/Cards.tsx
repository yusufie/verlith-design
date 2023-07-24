import React from "react";
import style from "./cards.module.scss";
import Image from "next/image";
import cardsData from "../../data/cards.json";

function Cards() {
  return (
    <div className={style.cards} >
      <div className={style.cardsTitle}>
        <h1> the Future of Data Ownership </h1>
      </div>

      <div className={style.cardsFrame}>
        {cardsData.cards.map((card) => (
          <div key={card.id} className={`${style[card.type]} inline-flex `}>
            <div className={style.cardContainer}>
              <Image
                src={card.image}
                alt="cards"
                width={335}
                height={335}
              />

              <div className={style.cardsInfo} >
                <div className={style.cardsType} >
                  <Image src={card.point} alt="point" width={24} height={24} />
                  <h1 className=" text-2xl text-white md:text-lg">
                    {card.name}
                  </h1>
                  <Image src={card.point} alt="point" width={24} height={24} />
                </div>

                <div className={style.cardsText} >
                  <p> {card.text} </p>
                </div>

                <div className={style.cardsButtonContainer} >
                  <div className={style.cardsButtonInfo} >
                    <button className={style.cardsButtonDetails} >
                      <span> more details </span>
                      <Image src="/icons/arrow-right-long.svg" alt="arrow" width={24} height={24} />
                    </button>

                    <p> {card.price}
                      <span>$</span>
                    </p>
                  </div>

                  <button className={style.cardsButton} > connect your wallet </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
