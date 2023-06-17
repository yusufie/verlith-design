import React from 'react'
import "../styles/cards.css"
import Image from "next/image";
import cardsData from "../data/cards.json"

function Cards() {
  return (
<div className='md:mx-2 xs:mx-1'>
  
      <div className="flex flex-row justify-center text-center py-32 md:py-16">
        <h1 className="text-5xl text-white md:text-2xl xs:text-xl" id="cardsTitle" style={{ fontFamily: 'Space Grotesk' , fontWeight: '500' }}>the Future of Data Ownership</h1>
      </div>


<div className='flex flex-row justify-center gap-12 md:gap-6 md:flex-col md:mx-4 xs:gap-4 xs:mx-2'>

      {cardsData.cards.map((card) => (
      <div key={card.id} className={`${card.type} inline-flex `}>

        <div className="flex flex-col w-96 p-2 md:flex-row md:gap-4 xs:gap-2" id='cardContainer'>

          <Image src={card.image} alt="cards" width={335} height={335} className='md:w-48 '/>

          <div className='md:flex-row'>
            

          <div className="cardsType flex flex-row justify-between text-center my-2 h-9 md:w-96 xs:w-48" style={{ fontFamily: 'Space Grotesk' , fontWeight: '500' }}>

            <Image src={card.point} alt="point" width={24} height={24} className='m-2' />
              <h1 className=" text-2xl text-white md:text-lg" >{card.name}</h1>
            <Image src={card.point} alt="point" width={24} height={24} className='m-2'/>

          </div>


          <div className="cardsText flex flex-row my-4 p-2 md:my-2">
            <p className=" text-xl leading-5 text-white md:text-xs" style={{ fontFamily: 'Space Grotesk' , fontWeight: '400' }}>{card.text}</p>
          </div>

          <div className="cardsButtonContainer flex flex-col my-2 p-2 md:my-1">

            <div className="flex flex-row justify-between mb-2 md:mb-1" style={{ fontFamily: 'Space Grotesk' , fontWeight: '400' }}>

              <button className="flex flex-row items-center gap-4 md:gap-2" >
                <span className=" text-xs text-gray-300" >more details</span>
                <Image
                src="/icons/arrow-right-long.svg"
                alt="arrow"
                width={24}
                height={24}
                />
              </button>

              <p className=" text-2xl font-medium text-gray-300 md:text-lg" >{card.price}
                <span className='text-lg items-center'>$</span>
              </p>

            </div>

            <button className='cardsButton text-base text-white font-light md:text-xs'>connect your wallet</button>

          </div> 


        </div>
      </div>
    </div>

))}
</div>
</div>

  )
}

export default Cards