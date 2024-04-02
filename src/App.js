import React, { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import videos from "./data/videos.json";
import videoDetailsList from "./data/video-details.json";

import "./App.scss";

const defaultVideo = videoDetailsList[0];

function App() {
  const [videoList, setVideoList] = useState(videos.filter((video) => video.id !== defaultVideo.id));
  const [videoDetails, setVideoDetails] = useState(defaultVideo);

  const onVideoSelect = (videoId) => {
    const selectedVideo = videoDetailsList.find((video) => video.id === videoId);
    const filteredVideos = videos.filter((video) => video.id !== videoId);
    setVideoDetails({ ...selectedVideo });
    setVideoList([...filteredVideos]);
  };

  return (
    <>
      <Header />
      <Main
        videoList={videoList}
        videoDetails={videoDetails}
        onVideoSelect={onVideoSelect}
      />
    </>
  );
}

export default App;
