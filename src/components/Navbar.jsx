import React from "react";
import { style } from "../utils/style";
import { navigationLinks } from "../utils/constant";

const Navbar = () => {
  return (
    <div className="w-full flex py-6 justify-between items-center">
      <div className={`${style.heading}`}>LOGO</div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
        {navigationLinks.map((nav) => (
          <li key={nav.id} className="font-monserrat font-normal cursor-pointer text-[16px] text-white mr-10">{nav.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
