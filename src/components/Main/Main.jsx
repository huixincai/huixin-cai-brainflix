import React, { useState, useEffect } from "react";

import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
import NextVideos from "../NextVideos/NextVideos";

import brainFlixApi from "../../utils/brain-flix-api";

import "./Main.scss";

const Main = ({
  videoIdToLoad,
  nextVideos,
}) => {
  const [videoDetails, setVideoDetails] = useState();

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const videoDetails = await brainFlixApi.getVideoById(videoIdToLoad);
      setVideoDetails(videoDetails);
    };
    fetchVideoDetails();
  }, [videoIdToLoad]);

  return (
    <main className="main">
      <Video videoDetails={videoDetails}/>
      <div className="main__wrapper">
        <VideoDetails videoDetails={videoDetails}/>
        <NextVideos nextVideos={nextVideos} />
      </div>
    </main>
  );
};

export default Main;
