import React, { useEffect, useState } from "react";
import Video1 from "../assets/assets/video.mp4";
import Like from "../assets/assets/like.png";
import Dislike from "../assets/assets/dislike.png";
import Save from "../assets/assets/save.png";
import Share from "../assets/assets/share.png";
import Jack from "../assets/assets/jack.png";
import User_profile from "../assets/assets/user_profile.jpg";
import { Api_key, value_converter } from "../data";
import moment from "moment";

function Playvideo({ videoId }) {
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    const videodata = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Api_key}`;
    await fetch(videodata)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-6xl p-4 mx-auto">
      {/* <video
        src={Video1}
        muted
        controls
        autoPlay
        className="w-full rounded-lg shadow-lg"
      ></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="rounded-lg shadow-lg  xl:w-[1100px] xl:h-[650px] lg:w-[800px] lg:h-[500px] md:w-[600px] md:h-[400px] sm:w-[400px] sm:h-[250px]"
      ></iframe>
      <h2 className="mt-4 text-xl font-bold text-gray-800">
        {apiData ? apiData.snippet.title : "Title Here..."}
      </h2>
      <p className="text-sm text-gray-500">
        {apiData ? value_converter(apiData.statistics.viewCount) : "16k"}{" "}
        &nbsp;&nbsp;&nbsp;
        {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
      </p>
      <div className="flex gap-4 mt-3">
        <button className="flex items-center gap-2 px-4 py-1 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
          <img src={Like} alt="Like" className="w-5" />{" "}
          {apiData ? value_converter(apiData.statistics.likeCount) : ""}
        </button>
        <button className="flex items-center gap-2 px-4 py-1 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
          <img src={Dislike} alt="Dislike" className="w-5" />{" "}
          {apiData ? value_converter(apiData.statistics.likeCount) : ""}
        </button>
        <button className="flex items-center gap-2 px-4 py-1 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
          <img src={Share} alt="Share" className="w-5" /> Share
        </button>
        <button className="flex items-center gap-2 px-4 py-1 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
          <img src={Save} alt="Save" className="w-5" /> Save
        </button>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-4">
        <img src={Jack} alt="Jack" className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">
            {apiData ? apiData.snippet.channelTitle : ""}
          </h3>
          <p className="text-sm text-gray-500">1M Subscribers</p>
        </div>

        <button className="px-4 py-1 ml-5 text-lg bg-red-700 rounded text-slate-100">
          Subscribe
        </button>
      </div>
      <hr className="my-4" />
      <div className="text-gray-700">
        <p className="text-lg">
          {apiData ? apiData.snippet.description.slice(0, 250) : ""}
        </p>
      </div>
      <hr className="my-4" />
      <h4 className="text-lg font-semibold">
        {apiData ? value_converter(apiData.statistics.commentCount) : ""}{" "}
        Comments
      </h4>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-4 mt-4">
          <img
            src={User_profile}
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">
              Jack Nicolment{" "}
              <span className="text-sm text-gray-500">1 day ago</span>
            </h3>
            <p className="text-xl">This is a great video for web development</p>
            <div className="flex items-center gap-2 mt-2">
              <img src={Like} alt="Like" className="w-4" />
              <span className="text-sm">234</span>
              <img src={Dislike} alt="Dislike" className="w-4" />
              <span className="text-sm">31</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Playvideo;
