import React, { useRef } from "react";
import { IoIosSend } from "react-icons/io";
const Header = () => {
  const headerRef = useRef(null)
  const stikyHeader = () => {

  }
  return (
    <div className="w-full h-[80px] leading-[80px] flex items-center sticky__header">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              n
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Nhơn</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
            </div>

            {/* ========== logo end============= */}
            {/* ==========menu start============= */}
            <div className="menu">
              <ul className="flex items-center gap-10">
                <li><a className="text-smallTextColor font-[600]" href="#about">About</a></li>
                <li><a className="text-smallTextColor font-[600]" href="#services">Services</a></li>
                <li><a className="text-smallTextColor font-[600]" href="#portfolio">Portfolio</a></li>
                <li><a className="text-smallTextColor font-[600]" href="#contact">contact</a></li>
              </ul>
            </div>
            {/* ==========menu end============= */}
            {/* ==========menu right============= */}
            <div className="flex items-center gap-4 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-700 w-[auto]">
              <button className="flex items-center gap-2">
              <IoIosSend /> Let's Talk
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
