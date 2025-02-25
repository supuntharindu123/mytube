import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api_key, value_converter } from "../data";
import moment from "moment";

function Recommend({ categoryId, videoId }) {
  const [data, setdata] = useState([]);
  const fetchdata = async () => {
    const videos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=LK&videoCategoryId=${categoryId}&key=${Api_key}`;
    await fetch(videos)
      .then((res) => res.json())
      .then((data) => setdata(data.items));
  };

  useEffect(() => {
    fetchdata();
  }, [videoId]);
  return (
    <div className="flex flex-wrap m-8 ml-16 lg:flex-col">
      {" "}
      {data.map((data, index) => {
        return (
          <Link
            to={`/video/${categoryId}/${data.id}`}
            className="p-3 mb-8 transition bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            <img
              src={data ? data.snippet.thumbnails.medium.url : ""}
              alt="Video Thumbnail"
              className="object-cover w-full h-40 rounded-lg"
            />
            <div className="mt-2">
              <p className="text-lg font-semibold text-gray-800">
                {data ? data.snippet.title : ""}
              </p>
              <p className="text-sm text-gray-600">
                {data ? data.snippet.channelTitle : ""}
              </p>
              <p className="text-xs text-gray-500">
                {data ? value_converter(data.statistics.viewCount) : ""} views
                &bull; {data ? moment(data.snippet.publishedAt).fromNow() : ""}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Recommend;
