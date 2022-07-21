import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GlassRepair() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-bold text-center mb-5">
        Glass Repair & Repacement
      </h1>
      <p className="text-lg mb-5">
        Broken windows are so much more than a minor inconvenience in the
        northeast. While we live in one of the most beautiful parts of the
        country (we know we may be a little biased), Maine is also known for its
        harsh weather, from tropical coastal storms to nor'easters. If you find
        yourself with damaged windows or doors in the middle of winter or during
        the hottest summer months, you need a company that offers quick and
        reliable broken window and door repair. Fortunately, you’ve found it.
      </p>
      <h5 className="text-lg font-bold mb-2">Insulated Units</h5>
      <p className="text-lg mb-5">
        Modern insulated glass units are “dual seal” technology with a primary
        PIB seal and a secondary backfill of urethane or silicone. These units
        last far longer than the old technology.
      </p>
      <h5 className="text-lg font-bold mb-2">
        You can even upgrade to Low-E units to maximize energy savings
      </h5>
      <p className="text-lg mb-5">
        If your window recieves a lot of sun, we recommend adding a low
        emissivity or Low-E coating on your new unit. This way, surfaces exposed
        to the sun the longest are able to reflect, absorb, and transmit heat.
        So, a Low-E coating reduces the amount of that heat transfers in or out
        resulting in a more energy efficiency and comfortable home.
      </p>
      <button
        onClick={() => navigate("/contact")}
        type="button"
        className="transition py-2 px-4 mb-5 bg-orange-600 hover:bg-orange-700 text-white"
      >
        Schedule a free consulation
      </button>
      <div className="h-full flex flex-col lg:flex-row bg-slate-100 p-8">
        <div className="h-96 w-full p-5">
          <h2 className="text-lg font-bold mb-3">What we can help with</h2>
          <ul className="space-y-3">
            <li>Annealed glass replacement</li>
            <li>Tempered glass replacement</li>
            <li>Laminated glass replacement</li>
            <li>Single, double, and triple glazed units</li>
            <li>Insulated glass</li>
            <li>Low-E coatings</li>
            <li>Argon gas filled units</li>
          </ul>
        </div>
        <div className="h-96 w-full border bg-pattern-serviceCard1"></div>
      </div>
    </div>
  );
}

export default GlassRepair;
