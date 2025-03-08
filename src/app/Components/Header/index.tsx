"use client";
import Image from "next/image";
import ZeptoImage from "../../../../public/assets/Zepto_Logo.png";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="flex items-center justify-between p-5 lg:px-16 gap-2 relative"
      style={{
        background: "linear-gradient(rgb(236, 220, 255), rgb(255, 255, 255))",
      }}
    >
      <Image
        src={ZeptoImage}
        alt="Zepto Logo"
        className="lg:w-[90px] md:w-[70px] sm:w-[60px] sm:h-[28px] xs:w-[60px] xs:h-[28px] md:h-[28px] lg:h-[30px] "
      />

      <div className="hidden sm:flex items-center gap-2 text-sm font-semibold truncate md:px-1 sm:w-[180px]">
        <span className="capitalize text-[14px]">Select Location</span>
        <IoIosArrowDown />
      </div>

      <div className="flex items-center gap-1 shadow-md h-[50px] px-2 w-[60%] rounded-lg bg-white">
        <CiSearch className="text-[18px]" />
        <input
          type="text"
          placeholder="Search for items"
          className="w-full px-2 outline-none"
        />
      </div>

      <div className="hidden sm:flex items-center lg:gap-6 md:gap-[1rem] sm:gap-3">
        <div className="flex flex-col items-center">
          <FaRegCircleUser className="text-[20px]" />
          <span className="text-sm">Login</span>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineShoppingCart className="text-[20px]" />
          <span className="text-sm">Cart</span>
        </div>
      </div>

      <IoMdMenu
        className="sm:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {menuOpen && (
        <div className=" absolute top-[4rem] z-40 left-0 w-full flex flex-col items-start bg-[#fff] shadow-2xl bg:white">
          <div className="flex items-center gap-4 text-sm font-semibold h-[50px] pl-4">
            <IoLocationOutline className="text-[20px]" />

            <span className="capitalize">Select Location</span>
          </div>

          <div className="flex flex-col gap-3 items-start w-full pl-4 my-2">
            <div className="flex flex-row gap-4 items-center h-[50px]">
              <FaRegCircleUser className="text-[20px]" />
              <span className="text-sm">Login</span>
            </div>
            <div className="flex flex-row gap-4 items-center h-[50px]">
              <MdOutlineShoppingCart className="text-[20px]" />
              <span className="text-sm">Cart</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
