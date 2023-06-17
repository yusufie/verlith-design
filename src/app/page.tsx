// import Image from 'next/image'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Social from "@/components/Social";
import Cards from "@/components/Cards";
import Advertisement from "@/components/Advertisement";

export default function Home() {
  return (
    <>
    
      <main className="mainContainer">

          <Navbar />
          
        <section className="topSection pt-18 md:pt-12 xs:pt-8">

          <Hero />

        </section>


        <section className="middleSection pb-8">

          <Social />
          <Cards />
          
        </section>
        

        <section className="bottomSection mt-12 pt-8">

          <Advertisement />

        </section>

      </main>
    </>
  )
}
