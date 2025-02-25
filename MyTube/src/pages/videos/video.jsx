import React from "react";
import Playvideo from "../../component/playvideo";
import Recommend from "../../component/recommend";
import { useParams } from "react-router-dom";

function Video() {
  const { videoId, categoryId } = useParams();
  return (
    <div className="flex flex-col float-left ml-10 lg:flex-row">
      <Playvideo videoId={videoId} />
      <Recommend />
    </div>
  );
}

export default Video;
