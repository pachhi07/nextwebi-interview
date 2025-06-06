import React from "react";

//components
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";
import Counters from "./Components/Counters/Counters";
import Testimonials from "./Components/Testimonials/Testimonials";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Blogs from "./Components/Blogs/Blogs";

export default function home() {
  return (
    <main>
      <Banner />
      <Services />     
       <Counters />
       <Testimonials />
      <WhyChooseUs />
      <Blogs />
    </main>
  );
}
