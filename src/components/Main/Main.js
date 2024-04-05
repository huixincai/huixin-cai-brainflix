import React from "react";

import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
import NextVideos from "../NextVideos/NextVideos";

import "./Main.scss";

const Main = ({
  nextVideos,
  videoDetails,
  onVideoSelect,
}) => {
  return (
    <main className="main">
      <Video videoDetails={videoDetails}/>
      <div className="main__wrapper">
        <VideoDetails videoDetails={videoDetails}/>
        <NextVideos nextVideos={nextVideos} onVideoSelect={onVideoSelect} />
      </div>
    </main>
  );
};

export default Main;
