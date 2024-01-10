import React from "react";
import {
  FaYoutube,
  FaGithub,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#12121e] pt-12 pb-6">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautifull products?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] ">
                Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-6 mt-4 sm:mt-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nulla
              error omnis ea nemo quisquam enim, aliquid hic corporis itaque
              consequuntur reprehenderit, optio numquam amet ab tenetur aliquam
              nisi eos?
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
            <span className="text-gray-300 font-[600] text-[15px]">
              Follow me :
            </span>
            <span>
              <a
                className="text-smallTextColor text-[18px] font-[600]"
                href="#youtube"
              >
                <FaYoutube size={30} />
              </a>
            </span>
            <span>
              <a
                className="text-smallTextColor text-[18px] font-[600]"
                href="#youtube"
              >
                <FaGithub size={30} />
              </a>
            </span>
            <span>
              <a
                className="text-smallTextColor text-[18px] font-[600]"
                href="#youtube"
              >
                <FaFacebookF size={30} />
              </a>
            </span>
            <span>
              <a
                className="text-smallTextColor text-[18px] font-[600]"
                href="#youtube"
              >
                <FaTelegramPlane size={30} />
              </a>
            </span>
          </div>
          </div>
         
        </div>
        
      </div>
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div  className="flex items-center justify-center sm:justify-between">
            <div className="hiden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">M</span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[19px]">Muhid</h2>
                  <p className="text-gray-400 text-[14px] font-[500]">Personal</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px] ">Copyright {year} by Muhid - All right reserved.</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
