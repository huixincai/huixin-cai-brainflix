import React, { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import videos from "./data/videos.json";
import videoDetailsList from "./data/video-details.json";

import "./App.scss";

function App() {
  const [videoList] = useState(videos);
  const [videoDetails, setVideoDetails] = useState(videoDetailsList[0]);

  const onVideoSelect = (videoId) => {
    const selectedVideo = videoDetailsList.find((video) => video.id === videoId);
    setVideoDetails(selectedVideo);
  };

  const nextVideos = videoList.filter((video) => video.id !== videoDetails.id);

  return (
    <>
      <Header />
      <Main
        nextVideos={nextVideos}
        videoDetails={videoDetails}
        onVideoSelect={onVideoSelect}
      />
    </>
  );
}

export default App;
