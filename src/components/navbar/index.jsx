import React from "react";

import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import logo from "../../assets/icons/logo.svg";
import { DarkMode, GitHub, ShieldMoon } from "@mui/icons-material";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-[90%] mx-auto min-[1440px]:w-[1440px] py-3">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" />
        <p className="font-bold text-[14px] ">Products</p>
        <p className="font-bold text-[14px] ">Docs</p>
        <p className="font-bold text-[14px] ">Pricing</p>
        <p className="font-bold text-[14px] ">About us</p>
        <p className="font-bold text-[14px] ">Blog</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="border border-[#dfe2e7] rounded-[12px] w-[160px] h-[32px] flex items-center gap-2 px-1">
          <SearchIcon className="text-[#0073E6]" />
          <Input
            className="border-none focus:outline-none"
            placeholder="Search..."
            disableUnderline
          />
          <button className="rounded-lg w-[56px] h-[21px] border border-[#dfe2e7] text-[12px] font-bold">
            Ctrl+K
          </button>
        </div>
        <button className="border border-[#d9dee2] rounded-[12px] w-[32px] h-[32px]">
          <GitHub className="text-[#0073E6]" />
        </button>
        <button className="border border-[#d9dee2] rounded-[12px] w-[32px] h-[32px]">
          <DarkMode className="text-[#0073E6]" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
