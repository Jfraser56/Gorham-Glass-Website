import React from "react";
import { Link } from "react-router-dom";

function ServiceCardOdd({ title, desc, linkTo, background }) {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse mb-2">
      <div className={`h-96 w-full md:w-1/2 ${background}`}></div>
      <div className="w-full md:w-1/2 p-10 md:mr-2 bg-sky-700 text-white flex flex-col justify-center items-start space-y-6">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p>{desc}</p>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={linkTo}
          className="transition px-8 py-2 bg-transparent hover:bg-white hover:text-black border cursor-pointer rounded"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}

export default ServiceCardOdd;
