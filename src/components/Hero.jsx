import React from "react";
import logo from "../assets/png/transparent-logo.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-pattern-hero h-[30rem] w-full flex flex-col items-center justify-start pt-12 space-y-12">
      <img className="h-36" src={logo} alt="" />
      <h1 className="text-2xl text-white text-center">
        Professional glass Repair, Replacement, Cleaning, and Installation.{" "}
        <br /> Year-Round.
      </h1>
      <Link
        to={"/contact"}
        className="transition px-4 sm:px-12 py-4 text-sm sm:text-xl bg-sky-600 rounded text-white text-center cursor-pointer hover:bg-sky-700"
      >
        Call or Email us for a free estimate{" "}
        <BsArrowRight className="inline ml-2" size="1.5rem" />
      </Link>
    </div>
  );
}

export default Hero;
