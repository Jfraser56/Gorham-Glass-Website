import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GlassCleaning() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full space-y-5 ">
      <h1 className="text-3xl font-bold text-center">Glass Cleaning</h1>
      <p className="text-lg">
        Is your home's coastal, mountain, or valley view marred by dirt and
        grime? Are your window shoppers lessening because of layers of dirt
        hiding your shop's treasures? Don't panic, Gorham Glass does more than
        just replace glass, we clean it too! Our team is more than capable of
        handling the dirtiest glass you can throw at them. From residential home
        windows to commercial shop fronts, we’ll have your windows sparkling
        like the day they were installed.
      </p>
      <p className="text-lg">
        Gorham Glass provides a traditional and well versed approach to glass
        cleaning that will have your home or storefront windows looking
        spotless, and leave your neighbors jealous.
      </p>
      <button
        onClick={() => navigate("/contact")}
        type="button"
        className="transition py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white"
      >
        Schedule a free consulation
      </button>
      <div className="h-full flex flex-col lg:flex-row bg-slate-100 p-8">
        <div className="h-96 w-full p-5">
          <h2 className="text-lg font-bold mb-3">Why window cleaning?</h2>
          <ul className="space-y-3">
            <li>Extend the life of your windows</li>
            <li>
              Spot cracks, and condensation from broken window seals early
            </li>
            <li>Prevent buildup of unhealthy particles and allergens </li>
            <li>Enhance your home or storefronts appearance </li>
          </ul>
        </div>
        <div className="h-96 w-full border bg-pattern-serviceCard3"></div>
      </div>
    </div>
  );
}

export default GlassCleaning;
