import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WindowHardware() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full space-y-5 ">
      <h1 className="text-3xl font-bold text-center">
        Window Hardware Repair & Replacement
      </h1>

      <p className="text-lg">
        Windows are simple enough to understand, however their hardware can
        quickly become complex as they contain many components with differing
        mechanical systems that may have you pulling your hair out. We offer
        repair and replacement services for many of these components to save you
        time and money.
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
          <h2 className="text-lg font-bold mb-3">What we can help with</h2>
          <ul className="space-y-3">
            <li>Sash lock and keeper replacement and adjustment</li>
            <li>Casement window hinge replacement</li>
            <li>Window weather stripping replacement</li>
            <li>Casement Window alignment</li>
            <li>Sticky double hung windows</li>
          </ul>
        </div>
        <div className="h-96 w-full border bg-pattern-serviceCard2"></div>
      </div>
    </div>
  );
}

export default WindowHardware;
