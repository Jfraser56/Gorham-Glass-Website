import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-pattern-hero h-[30rem] w-full flex flex-col items-center justify-start space-y-8">
      <img
        className="h-52"
        src="https://drive.google.com/uc?id=1L-mdoHZG14qI5r9AnTCBkMt1MbK5eLIp"
        alt=""
      />
      <h1 className="text-2xl text-white text-center">
        Professional Glass Repair, Replacement, Installation, and Cleaning.{" "}
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
