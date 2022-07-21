import React from "react";
import ServiceCardEven from "./ServiceCardEven";
import ServiceCardOdd from "./ServiceCardOdd";

function Services() {
  return (
    <div className="flex flex-col items-center justify-start pt-10">
      <ServiceCardEven
        title="Glass"
        desc="We provide a wide range of glass units for any window or door you need serviced. Depending on your home, we offer both annealed, tempered, and laminated glass units, as well as specialized coatings to maximize your homes energy efficiency."
        linkTo="services/glass-repair"
        background="bg-pattern-serviceCard1"
      />
      <ServiceCardOdd
        title="Hardware"
        desc="Our service technicians repair and replace hardware, such as window operators, multipoint door locks, and more."
        linkTo="services/hardware"
        background="bg-pattern-serviceCard2"
      />
      <ServiceCardEven
        title="Glass Cleaning"
        desc="We offer glass cleaning services for both residential, and commercial buildings. Gorham Glass will get your business or home looking its best without spending a fortune."
        linkTo="services/cleaning"
        background="bg-pattern-serviceCard3"
      />
    </div>
  );
}

export default Services;
