import React from "react";
import Thumbnali1 from "../assets/assets/thumbnail1.png";
import Thumbnali2 from "../assets/assets/thumbnail2.png";
import Thumbnali3 from "../assets/assets/thumbnail3.png";
import Thumbnali4 from "../assets/assets/thumbnail4.png";
import Thumbnali5 from "../assets/assets/thumbnail5.png";
import Thumbnali6 from "../assets/assets/thumbnail6.png";
import Thumbnali7 from "../assets/assets/thumbnail7.png";
import Thumbnali8 from "../assets/assets/thumbnail8.png";
import { Link } from "react-router-dom";

function Recommend() {
  return (
    <div className="flex flex-wrap m-8 ml-16 lg:flex-col">
      <Link
        to={`video/20/1224`}
        className="p-3 mb-8 transition bg-white shadow-md rounded-xl hover:shadow-lg"
      >
        <img
          src={Thumbnali1}
          alt="Video Thumbnail"
          className="object-cover w-full h-40 rounded-lg"
        />
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-800">My Video</p>
          <p className="text-sm text-gray-600">Stack</p>
          <p className="text-xs text-gray-500">15k views &bull; 2 days ago</p>
        </div>
      </Link>
      <div className="p-3 transition bg-white shadow-md rounded-xl hover:shadow-lg">
        <img
          src={Thumbnali2}
          alt="Video Thumbnail"
          className="object-cover w-full h-40 rounded-lg"
        />
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-800">My Video</p>
          <p className="text-sm text-gray-600">Stack</p>
          <p className="text-xs text-gray-500">15k views &bull; 2 days ago</p>
        </div>
      </div>
      <div className="p-3 transition bg-white shadow-md rounded-xl hover:shadow-lg">
        <img
          src={Thumbnali3}
          alt="Video Thumbnail"
          className="object-cover w-full h-40 rounded-lg"
        />
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-800">My Video</p>
          <p className="text-sm text-gray-600">Stack</p>
          <p className="text-xs text-gray-500">15k views &bull; 2 days ago</p>
        </div>
      </div>
      <div className="p-3 transition bg-white shadow-md rounded-xl hover:shadow-lg">
        <img
          src={Thumbnali4}
          alt="Video Thumbnail"
          className="object-cover w-full h-40 rounded-lg"
        />
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-800">My Video</p>
          <p className="text-sm text-gray-600">Stack</p>
          <p className="text-xs text-gray-500">15k views &bull; 2 days ago</p>
        </div>
      </div>
      <div className="p-3 transition bg-white shadow-md rounded-xl hover:shadow-lg">
        <img
          src={Thumbnali5}
          alt="Video Thumbnail"
          className="object-cover w-full h-40 rounded-lg"
        />
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-800">My Video</p>
          <p className="text-sm text-gray-600">Stack</p>
          <p className="text-xs text-gray-500">15k views &bull; 2 days ago</p>
        </div>
      </div>
      <div className="p-3 transition bg-white shadow-md rounded-xl hover:shadow-lg">
        <img
          src={Thumbnali6}
          alt="Video Thumbnail"
          className="object-cover w-full h-40 rounded-lg"
        />
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-800">My Video</p>
          <p className="text-sm text-gray-600">Stack</p>
          <p className="text-xs text-gray-500">15k views &bull; 2 days ago</p>
        </div>
      </div>
      <div className="p-3 transition bg-white shadow-md rounded-xl hover:shadow-lg">
        <img
          src={Thumbnali7}
          alt="Video Thumbnail"
          className="object-cover w-full h-40 rounded-lg"
        />
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-800">My Video</p>
          <p className="text-sm text-gray-600">Stack</p>
          <p className="text-xs text-gray-500">15k views &bull; 2 days ago</p>
        </div>
      </div>
      <div className="p-3 transition bg-white shadow-md rounded-xl hover:shadow-lg">
        <img
          src={Thumbnali8}
          alt="Video Thumbnail"
          className="object-cover w-full h-40 rounded-lg"
        />
        <div className="mt-2">
          <p className="text-lg font-semibold text-gray-800">My Video</p>
          <p className="text-sm text-gray-600">Stack</p>
          <p className="text-xs text-gray-500">15k views &bull; 2 days ago</p>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
