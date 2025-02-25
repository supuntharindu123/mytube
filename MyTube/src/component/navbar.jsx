import React from "react";
import Menu from "../assets/assets/menu.png";
import Logo from "../assets/assets/logo.png";
import Search from "../assets/assets/search.png";
import Upload from "../assets/assets/upload.png";
import More from "../assets/assets/more.png";
import Notification from "../assets/assets/notification.png";
import ProfileIcon from "../assets/assets/jack.png";
import { Link } from "react-router-dom";

function Navbar({ setsidebar }) {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={Menu}
          alt="Menu"
          className="w-6 cursor-pointer"
          onClick={() => {
            setsidebar((prev) => (prev === false ? true : false));
          }}
        />
        <Link to="/" className="font-sans font-extrabold ">
          MY<span className="text-2xl text-red-600">TUBE</span>
        </Link>
      </div>

      <div className="flex items-center px-3 py-1 border border-gray-300 rounded-xl">
        <input
          type="text"
          placeholder="Search"
          className="px-2 text-lg outline-none "
        />
        <img src={Search} alt="Search" className="w-5 cursor-pointer" />
      </div>

      <div className="flex items-center gap-4">
        <img src={More} alt="More Options" className="w-6 cursor-pointer" />
        <img src={Upload} alt="Upload" className="w-6 cursor-pointer" />
        <img
          src={Notification}
          alt="Notifications"
          className="w-6 cursor-pointer"
        />
        <img
          src={ProfileIcon}
          alt="Profile"
          className="w-8 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Navbar;
