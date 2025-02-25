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
import { useParams } from "react-router-dom";

function Playvideo({ videoId }) {
  const [apiData, setApiData] = useState(null);
  const [channeldata, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchData = async () => {
    const videodata = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Api_key}`;
    await fetch(videodata)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    const channel = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${Api_key}`;
    await fetch(channel)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };

  const fetchcommentData = async () => {
    const comments = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${Api_key}`;
    await fetch(comments)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
    fetchcommentData();
  }, [apiData]);
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
        <img
          src={channeldata ? channeldata.snippet.thumbnails.default.url : ""}
          alt="Jack"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">
            {apiData ? apiData.snippet.channelTitle : ""}
          </h3>
          <p className="text-sm text-gray-500">
            {value_converter(
              channeldata ? channeldata.statistics.subscriberCount : ""
            )}{" "}
            Subscribers
          </p>
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
      {commentData.map((data, index) => {
        return (
          <div key={index} className="flex gap-4 mt-4">
            <img
              src={
                data
                  ? data.snippet.topLevelComment.snippet.authorProfileImageUrl
                  : ""
              }
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">
                {data
                  ? data.snippet.topLevelComment.snippet.authorDisplayName
                  : ""}{" "}
                &nbsp; &nbsp;
                <span className="text-sm text-gray-500">
                  {data
                    ? moment(
                        data.snippet.topLevelComment.snippet.publishedAt
                      ).fromNow()
                    : ""}
                </span>
              </h3>
              <p className="text-xl">
                {data ? data.snippet.topLevelComment.snippet.textDisplay : ""}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <img src={Like} alt="Like" className="w-4" />
                <span className="text-sm">
                  {data ? data.snippet.topLevelComment.snippet.likeCount : ""}
                </span>
                <img src={Dislike} alt="Dislike" className="w-4" />
                <span className="text-sm"></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Playvideo;
