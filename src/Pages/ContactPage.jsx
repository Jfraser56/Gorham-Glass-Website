import React from "react";
import { BsLaptop, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function ContactPage() {
  return (
    <div className="bg-slate-50">
      <div className="bg-contact-hero h-[30rem] w-full text-center pt-32 space-y-12">
        <h1 className="text-5xl text-white">Contact Us</h1>
        <h1 className="text-3xl text-white leading-10">
          Open Daily <br /> 9:00am - 4:00pm
        </h1>
      </div>
      <h1 className="my-10 text-center mx-auto font-bold text-2xl sm:text-3xl w-2/3">
        You can always get in touch: Send us a message here, give us a call, or
        shoot us an Email and we will be sure to get back to you
      </h1>
      <div className="p-5 md:p-10 flex flex-col lg:flex-row">
        <form
          action="/pages/success"
          name="contact"
          method="POST"
          data-netlify="true"
          className="w-full h-[45rem] lg:w-2/3 bg-pattern-contactForm p-10 pb-5"
        >
          <h3 className="text-center text-white text-2xl font-light mb-8">
            Contact
          </h3>
          <div>
            <label htmlFor="name" className="text-white text-sm">
              Name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 mb-5 transition w-full h-10 rounded-sm bg-black/20 text-white p-3 outline-none border border-white focus:border-2"
            />
            <label htmlFor="email" className="text-white text-sm">
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 mb-5 transition w-full h-10 rounded-sm bg-black/20 text-white p-3 outline-none border border-white focus:border-2"
            />
            <label htmlFor="phone" className="text-white text-sm">
              Phone*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-1 mb-5 transition w-full h-10 rounded-sm bg-black/30 text-white p-3 outline-none border border-white focus:border-2"
            />
            <label htmlFor="location" className="text-white text-sm">
              Location*
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="mt-1 mb-5 transition w-full h-10 rounded-sm bg-black/30 text-white p-3 outline-none border border-white focus:border-2"
            />
            <label htmlFor="message" className="text-white text-sm">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              className="resize-none mt-1 mb-5 transition w-full h-32 rounded-sm bg-black/30 text-white p-3 outline-none border border-white focus:border-2"
            />
            <button className="w-full h-12 rounded bg-white" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
        <div className="w-full flex flex-col p-10 lg:py-0 space-y-10">
          <div className="flex flex-col justify-start items-center lg:items-start text-gray-500 ">
            <p>gorhamglass@gmail.com</p>
            <p className="mb-5">774-228-3381</p>
            <p>Gorham Glass LLC</p>
            <p>103 South Street</p>
            <p>Gorham ME, 04048</p>
          </div>
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center h-40 mb-5 w-full bg-white drop-shadow-lg rounded-lg text-lg font-light">
              <BsLaptop size="1.75rem" className="mb-3 fill-sky-600" />
              gorhamglass@gmail.com
            </div>
            <div className="flex flex-col justify-center items-center h-40 mb-5 w-full bg-white drop-shadow-lg rounded-lg text-lg font-light">
              <BsTelephone size="1.75rem" className="mb-3 fill-sky-600" />
              (774) 228-3381
            </div>
            <div className="flex flex-col justify-center items-center h-40 w-full bg-white drop-shadow-lg rounded-lg text-lg font-light text-center">
              <AiOutlineMail size="1.75rem" className="mb-3 fill-sky-600" />
              Gorham Glass <br />
              103 South Street, Gorham ME 04048
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
