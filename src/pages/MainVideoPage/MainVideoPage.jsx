import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import brainFlixApi from "../../utils/brain-flix-api";

import "./MainVideoPage.scss";

function MainVideoPage() {
  const { videoId } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const videos = await brainFlixApi.getVideos();
      setVideoList(videos);
      setIsFetching(false);
    };
    fetchVideos();
  }, []);

  if (isFetching) {
    return (
      <p>... Loading your video data ...</p>
    )
  }

  const videoIdToLoad = videoId || videoList[0].id;
  const nextVideos = videoList.filter((video) => video.id !== videoIdToLoad);

  return (
    <>
      <Header />
      <Main
        videoIdToLoad={videoIdToLoad}
        nextVideos={nextVideos}
      />
    </>
  );
}

export default MainVideoPage;
