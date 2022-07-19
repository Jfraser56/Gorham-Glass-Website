import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GlassCleaning() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full space-y-5 ">
      <h1 className="text-3xl font-bold text-center">Glass Cleaning</h1>
      <p className="text-lg">
        Broken windows are so much more than a minor inconvenience in Colorado.
        While this state is one of the most beautiful in the nation (we know we
        may be a little biased), it is also known for its harsh weather. Whether
        you find yourself with broken windows in the middle of winter or during
        the hottest summer months, you need a company that offers quick and
        reliable broken window repair. Fortunately, you’ve found it.
      </p>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni, at
        voluptatum ab dicta laudantium provident doloribus possimus in dolorem
        praesentium cupiditate, qui animi laboriosam, odio tempora labore sint
        obcaecati assumenda harum aliquam incidunt beatae. Quod ipsam suscipit
        officia illo!
      </p>
      <button
        onClick={() => navigate("/contact")}
        type="button"
        className="transition py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white"
      >
        Schedule a consulation
      </button>
      <div className="h-full flex flex-col lg:flex-row bg-slate-100 p-8">
        <div className="h-96 w-full p-5">
          <h2 className="text-lg font-bold mb-3">Types of glass we serve</h2>
          <ul className="space-y-3">
            <li>Clear Glass</li>
            <li>Tempered Glass</li>
            <li>Single Pane</li>
            <li>Insulated Glass</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className="h-96 w-full border bg-pattern-serviceCard"></div>
      </div>
    </div>
  );
}

export default GlassCleaning;
