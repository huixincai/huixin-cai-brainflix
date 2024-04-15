import React from "react";

import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
import NextVideos from "../NextVideos/NextVideos";

import "./Main.scss";

const Main = ({ videoDetails, nextVideos }) => {
  return (
    <main className="main">
      {videoDetails && <Video videoDetails={videoDetails} />}
      <div className="main__wrapper">
        {videoDetails && <VideoDetails videoDetails={videoDetails} />}
        <NextVideos nextVideos={nextVideos} />
      </div>
    </main>
  );
};

export default Main;
