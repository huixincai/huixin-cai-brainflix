import React from "react";

import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
import NextVideos from "../NextVideos/NextVideos";

import "./Main.scss";

const Main = ({
  videoList,
  videoDetails,
  onVideoSelect,
}) => {
  return (
    <main>
      <Video videoDetails={videoDetails}/>
      <VideoDetails videoDetails={videoDetails}/>
      <NextVideos videoList={videoList} onVideoSelect={onVideoSelect} />
    </main>
  );
};

export default Main;
