import { useParams, useNavigate } from "react-router-dom";
import GlassCleaning from "./GlassCleaning";
import GlassRepair from "./GlassRepair";
import WindowHardware from "./WindowHardware";
import NotFound from "./NotFound";

function Services() {
  const { service } = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-services-hero h-[30rem] w-full text-center pt-40 space-y-8">
        <h1 className="text-2xl font-light text-white">What we offer</h1>
        <h1 className="text-5xl text-white leading-10">Services</h1>
      </div>
      <div className="lg:px-24 pt-10 flex flex-col lg:flex-row p-5 lg:space-x-5">
        <nav className="h-full w-full lg:w-96 mb-5 flex flex-col items-start justify-start bg-slate-100 p-10 ">
          <h4 className="font-bold underline text-lg mb-2">Our Services</h4>
          <ul className="text-gray-700 font-light space-y-2">
            <li
              onClick={() => navigate("/services/glass-repair")}
              className={`${
                service === "glass-repair" && "text-sky-600"
              }   transition hover:text-sky-700 hover:underline cursor-pointer`}
            >
              Glass Replacement & Repair
            </li>
            <li
              onClick={() => navigate("/services/hardware")}
              className={`${
                service === "hardware" && "text-sky-600"
              }   transition hover:text-sky-700 hover:underline cursor-pointer`}
            >
              Window Hardware tune up
            </li>
            <li
              onClick={() => navigate("/services/cleaning")}
              className={`${
                service === "cleaning" && "text-sky-600"
              }   transition hover:text-sky-700 hover:underline cursor-pointer`}
            >
              Residential & Commercial Cleaning
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block w-[2px] h-screen bg-gray-300"></div>
        {service === "glass-repair" ? (
          <GlassRepair />
        ) : service === "hardware" ? (
          <WindowHardware />
        ) : service === "cleaning" ? (
          <GlassCleaning />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default Services;
