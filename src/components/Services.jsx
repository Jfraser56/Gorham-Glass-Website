import React from "react";
import ServiceCardEven from "./ServiceCardEven";
import ServiceCardOdd from "./ServiceCardOdd";

function Services() {
  return (
    <div className="flex flex-col items-center justify-start pt-10">
      <ServiceCardEven />
      <ServiceCardOdd />
    </div>
  );
}

export default Services;
