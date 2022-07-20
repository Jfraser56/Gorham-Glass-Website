import React from "react";

function Overview() {
  return (
    <div className="w-full flex flex-col justify-start items-center text-center p-5 md:p-10 space-y-12">
      <h1 className="text-xl sm:text-3xl">
        We are a locally owned and operated glass servicing company; <br /> we
        professionally repair, replace, install, and clean glass for your home
        or storefront year-round.
      </h1>
      <div className="w-full sm:w-1/2">
        <h2 className="text-lg font-bold mb-2 underline">
          KNOWLEDGEABLE TECHNICIANS
        </h2>
        <p className="font-light">
          If you have broken, foggy or discolored glass, doors or windows that
          don't operate properly, as well as any other window & door hardware
          issues. We're here to help
        </p>
      </div>
      <div className="w-full sm:w-1/2">
        <h2 className="text-lg font-bold mb-2 underline">FOR HOMEOWNERS</h2>
        <p className="font-light">
          Timely, skilled, and affordable repairs to maintain your comfort,
          safety, and beautiful north-eastern views whether you reside on the
          coast, or further inland.
        </p>
      </div>
      <div className="w-full sm:w-1/2">
        <h2 className="text-lg font-bold mb-2 underline">
          FOR PROPERTY MANAGEMENT COMPANIES
        </h2>
        <p className="font-light">
          Flexible and convenient appointments to work around your busy check-in
          and check-out schedule
        </p>
      </div>
      <div className="w-full sm:w-1/2">
        <h2 className="text-lg font-bold mb-2 underline">
          CONVENIENT LOCATION
        </h2>
        <p className="font-light">
          Located in the heart of Gorham Maine, we provide timely service to all
          of Cumberland county, and the surrounding counties within Southern
          Maine.
        </p>
      </div>
    </div>
  );
}

export default Overview;
