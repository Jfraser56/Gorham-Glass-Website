import React from "react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Overview from "../components/Overview";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="bg-slate-50">
      <Hero />
      <Overview />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
