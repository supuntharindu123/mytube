import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api_key, value_converter } from "../data";
import moment from "moment";

function Feed({ category }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    console.log(category);
    const video_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=LK&videoCategoryId=${category}&key=${Api_key}`;
    await fetch(video_url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="p-3 transition bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt="Video Thumbnail"
              className="object-cover w-full h-40 rounded-lg"
            />
            <div className="mt-2">
              <p className="text-lg font-semibold text-gray-800">
                {item.snippet.title}
              </p>
              <p className="text-lg font-extrabold text-gray-600">
                {item.snippet.channelTitle}
              </p>
              <p className="text-xs text-gray-500">
                {value_converter(item.statistics.viewCount)} views &nbsp;&nbsp;
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Feed;
