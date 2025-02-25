import React from "react";
import HomeIcon from "../assets/assets/home.png";
import GameIcon from "../assets/assets/game_icon.png";
import AutoMobile from "../assets/assets/automobiles.png";
import Sports from "../assets/assets/sports.png";
import Entertaiment from "../assets/assets/entertainment.png";
import Tech from "../assets/assets/tech.png";
import Music from "../assets/assets/music.png";
import Blogs from "../assets/assets/blogs.png";
import News from "../assets/assets/news.png";
import Jack from "../assets/assets/jack.png";
import Simon from "../assets/assets/simon.png";
import Tom from "../assets/assets/tom.png";
import Megan from "../assets/assets/megan.png";
import Cameron from "../assets/assets/cameron.png";

function Sidebar({ sidebar, category, setCategory }) {
  return (
    <div
      className={`h-full p-4 text-gray-900 bg-white shadow-md ${
        sidebar ? "w-64 visible mr-4" : "w-0 invisible"
      }`}
    >
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Categories</h2>
        <div className="space-y-4">
          <div
            className={`flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${
              category === 0 ? "bg-gray-200" : ""
            }`}
            onClick={() => setCategory(0)}
          >
            <img src={HomeIcon} alt="Home" className="w-6 h-6" />
            <p className="text-lg">Home</p>
          </div>
          <div
            className={`flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${
              category === 20 ? "bg-gray-200" : ""
            }`}
            onClick={() => setCategory(20)}
          >
            <img src={GameIcon} alt="Game" className="w-6 h-6" />
            <p className="text-lg">Game</p>
          </div>
          <div
            className={`flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${
              category === 2 ? "bg-gray-200" : ""
            }`}
            onClick={() => setCategory(2)}
          >
            <img src={AutoMobile} alt="Automobile" className="w-6 h-6" />
            <p className="text-lg">Automobile</p>
          </div>
          <div
            className={`flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${
              category === 17 ? "bg-gray-200" : ""
            }`}
            onClick={() => setCategory(17)}
          >
            <img src={Sports} alt="Sports" className="w-6 h-6" />
            <p className="text-lg">Sports</p>
          </div>
          <div
            className={`flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${
              category === 24 ? "bg-gray-200" : ""
            }`}
            onClick={() => setCategory(24)}
          >
            <img src={Entertaiment} alt="Entertainment" className="w-6 h-6" />
            <p className="text-lg">Entertainment</p>
          </div>
          <div
            className={`flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${
              category === 28 ? "bg-gray-200" : ""
            }`}
            onClick={() => setCategory(28)}
          >
            <img src={Tech} alt="Tech" className="w-6 h-6" />
            <p className="text-lg">Tech</p>
          </div>
          <div
            className={`flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${
              category === 10 ? "bg-gray-200" : ""
            }`}
            onClick={() => setCategory(10)}
          >
            <img src={Music} alt="Music" className="w-6 h-6" />
            <p className="text-lg">Music</p>
          </div>
          <div
            className={`flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${
              category === 22 ? "bg-gray-200" : ""
            }`}
            onClick={() => setCategory(22)}
          >
            <img src={Blogs} alt="Blogs" className="w-6 h-6" />
            <p className="text-lg">Blogs</p>
          </div>
          <div
            className={`flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200 hover:cursor-pointer ${
              category === 25 ? "bg-gray-200" : ""
            }`}
            onClick={() => setCategory(25)}
          >
            <img src={News} alt="News" className="w-6 h-6" />
            <p className="text-lg">News</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Subscribe</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200">
            <img src={Jack} alt="Jack" className="w-10 h-10 rounded-full" />
            <p className="text-lg">Jack</p>
          </div>
          <div className="flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200">
            <img src={Megan} alt="Megan" className="w-10 h-10 rounded-full" />
            <p className="text-lg">Megan</p>
          </div>
          <div className="flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200">
            <img
              src={Cameron}
              alt="Cameron"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-lg">Cameron</p>
          </div>
          <div className="flex items-center gap-4 p-2 transition duration-200 rounded-lg hover:bg-gray-200">
            <img src={Tom} alt="Tom" className="w-10 h-10 rounded-full" />
            <p className="text-lg">Tom</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
