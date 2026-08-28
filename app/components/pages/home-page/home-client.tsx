"use client";

import Footer from "./footer";
import Hero from "./hero";
import Services from "./services";

export default function HomeClient() {
  return (
    <div id="home" className="h-[140%]">
      <Hero/>
      
      <hr className="my-20 text-[#595858]"/>

      <Services/>

      <hr className="mt-20 text-[#595858]"/>

      <Footer></Footer>
    </div>
  )
}
