import React from "react";
import { useParams } from "react-router-dom";
import Playvideo from "../../components/Playvideo/Playvideo";
import Recommanded from "../../components/Recommanded/Recommanded";
import "./video.css";

function Video() {
  const { videoId, categoryId } = useParams();

  //this is dynamically derive the parametere in the video from the feed components

  return (
    <div className="play-container">
      <div className="play-container-left">
        <Playvideo videoId={videoId}></Playvideo>
      </div>
      <div className="play-container-right">
        <Recommanded categoryId={categoryId}></Recommanded>
      </div>
    </div>
  );
}

export default Video;
