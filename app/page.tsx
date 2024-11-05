import React from "react";
import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import Bands from "@/components/Bands";
import Brands from "@/components/Brands";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import Bands2 from "@/components/Bands2";
import ServicePoints from "@/components/ServicePoints";
import WhyUs from "@/components/WhyUs";
import Contactus from "@/components/ContactUs";

export default function Home() {
   return (
       <main className="page-content">
           <Banner />
           <Bands />
           <AboutUs />
           <Brands />
           <Products />
           <FAQ />
           <Bands2 />
           <ServicePoints />
           <WhyUs />
           <Contactus />
       </main>
   );
}
