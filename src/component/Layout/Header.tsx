import { FaAngleDown } from "react-icons/fa6";
import pix from "../../assets/pics/image.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex w-full h-[80px] border mb-10 items-center z-20 justify-center fixed bg-white">
        <div className=" w-[95%] h-[100%] flex ">
          <div className="w-[20%] h-[100%] items-center justify-center flex">
            <img src={pix} alt="Logo" className="w-full h-[30px]" />
          </div>
          <div className="w-[60%] h-[100%] flex gap-10 items-center justify-end ">
            <p className="flex font-semibold gap-1 cursor-pointer">
              Products
              <FaAngleDown className="mt-1" />
            </p>
            <p className="flex font-semibold gap-1 cursor-pointer">
              Solutions
              <FaAngleDown className="mt-1" />
            </p>
            <p className="flex font-semibold gap-1 cursor-pointer">
              Developers
              <FaAngleDown className="mt-1" />
            </p>
            <p className="flex font-semibold gap-1 cursor-pointer">
              Partners
              <FaAngleDown className="mt-1" />
            </p>
            <p className="flex font-semibold gap-1 items-center justify-center cursor-pointer">
              <p>pricing</p>
              <FaAngleDown className="mt-1" />
            </p>
          </div>
          <div className="w-[30%] h-[100%] flex items-center justify-end">
            <div className=" flex">
              <Link to="/login">
                <div className=" py-2 px-3 cursor-pointer">Login</div>
              </Link>

              <Link to="/signup">
                <div className=" py-2 px-3 bg-blue-500 rounded-full text-white text-[15px] hover:cursor-pointer">
                  Sign Up
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
