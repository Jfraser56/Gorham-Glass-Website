import React from "react";

function Contact() {
  return (
    <div className="w-full flex flex-col justify-start items-center text-center p-10 space-y-12">
      <h1 className="text-3xl leading-10">Contact Us!</h1>
      <div className="w-full sm:w-1/2">
        <h2 className="text-lg font-bold mb-2 underline">
          SCHEDULE AN APPOINTMENT
        </h2>
        <p className="font-light">
          To set up a service consultation, please contact us at your
          convenience. We look forward to solving any issue you may have!
        </p>
      </div>
      <div className="w-full sm:w-1/2 space-y-3">
        <h2 className="text-lg font-bold mb-2 underline">GORHAM GLASS</h2>
        <p className="font-light">
          23 Main Street. Gorham ME 05050, United States
        </p>
        <p className="font-light">774-228-3381</p>
        <p className="font-light">gorhamglass@gmail.com</p>
      </div>
      <div className="w-full sm:w-1/2 space-y-3">
        <h2 className="text-lg font-bold mb-2 underline">HOURS</h2>
        <p className="font-light">Open Daily: 9:00AM - 4:00PM</p>
      </div>
    </div>
  );
}

export default Contact;
