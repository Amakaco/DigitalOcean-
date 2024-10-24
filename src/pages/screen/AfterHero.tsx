import img from "../../assets/pics/todoist logo (20).png";
// import { IoIosArrowRoundForward } from "react-icons/io";

const AfterHero = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80%] h-[250px] bg-[#1433D6] mt-44 flex justify-between rounded-2xl ">
        <div className="w-[48%] pl-16">
          <p className="mt-14 text-white font-semibold text-2xl">
            Now Available: GPU Droplets
          </p>
          <p className="mt-3 text-white font-semibold">
            GPU solutions for everyone—novice to expert. Run training and
            inference, process large data sets and complex neural networks, and
            deploy high-performance computing clusters.
          </p>
          <p className="mt-5 text-white font-semibold hover:cursor-pointer hover:underline transition-all duration-500">
            <p>Learn more →</p>
          </p>
        </div>
        <div className="w-[50%]">
          <img src={img} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default AfterHero;
