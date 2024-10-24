// import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bt from "../../assets/pics/todoist logo (9).svg";
import img from "../../assets/pics/todoist logo (19).png";
import { GrGithub } from "react-icons/gr";

const Hero = () => {
  return (
    <div>
      <div className="bg-custom-image w-full h-[145vh] flex item-center justify-center bg-cover bg-center">
        <div className="w-full flex justify-center items-center flex-col mt-24">
          <div className="w-[95%] max-w-[750px] flex flex-col items-center">
            <div
              className="text-center py-2 px-3 flex items-center gap-2 text-white bg-blue-900
             rounded-full font-semibold mt-[150px] transition-all duration-500 hover:bg-blue-800 hover:cursor-pointer"
            >
              <p>
                DigitalOcean GPU Droplets are now available. Perfect for your
                AI/ML workloads. Learn more
              </p>
              <FaArrowRightLong />
            </div>

            <h1 className="text-5xl w-[600px] my-5 text-white text-center font-bold">
              Learn here. Dream here. Develop here.
            </h1>

            <p className="text-xl text-white text-center w-[700px] h-[90px] font-semibold">
              Powerful and production-ready, our cloud platform has the
              solutions that devs like you need to succeed—whether you're
              building world-changing AI apps, running a side project, or
              building a business.
            </p>

            <div className="flex justify-center py-10 space-x-5">
              <button className="text-center py-2 px-3 bg-white text-black rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-500">
                Sign up with email
              </button>
              <button className="text-center py-2 px-3 bg-white text-black duration-500 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
                <img src={bt} alt="" className="size-5 " />
                Sign up with Google
              </button>
              <button className="text-center py-2 px-3 bg-white text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-500">
                <GrGithub className="size-5 " />
                Sign up with GitHub
              </button>
            </div>
          </div>
          <div className="w-full h-[500px] flex justify-center mt-5">
            <img src={img} alt="" className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
