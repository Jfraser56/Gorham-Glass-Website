import React from "react";
import ServiceCardEven from "./ServiceCardEven";
import ServiceCardOdd from "./ServiceCardOdd";

function Services() {
  return (
    <div className="flex flex-col items-center justify-start pt-10">
      <ServiceCardEven
        title="Glass Repair & Replacement"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis inventore optio dicta dolorum, illo temporibus doloremque officiis? Fuga, ipsum."
        linkTo="services/glass-repair"
      />
      <ServiceCardOdd
        title="Window Hardware Tune up"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis inventore optio dicta dolorum, illo temporibus doloremque officiis? Fuga, ipsum."
        linkTo="services/hardware"
      />
      <ServiceCardEven
        title="Residential & Storefront Cleaning"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis inventore optio dicta dolorum, illo temporibus doloremque officiis? Fuga, ipsum."
        linkTo="services/cleaning"
      />
    </div>
  );
}

export default Services;
