import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import brainFlixApi from "../../utils/brain-flix-api";

import "./MainVideoPage.scss";

function MainVideoPage() {
  const { videoId } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [videoDetails, setVideoDetails] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const videoIdToLoad = videoId || (videoList[0] && videoList[0].id);
  const nextVideos = videoList.filter((video) => video.id !== videoIdToLoad);

  useEffect(() => {
    const fetchVideos = async () => {
      const videos = await brainFlixApi.getVideos();
      setVideoList(videos);
      setIsFetching(false);
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const videoDetails = await brainFlixApi.getVideoById(videoIdToLoad);
      setVideoDetails(videoDetails);
    };
    if (videoIdToLoad) {
      fetchVideoDetails();
    }
  }, [videoIdToLoad]);

  if (isFetching) {
    return <p>... Loading your video data ...</p>;
  }

  return (
    <>
      <Header />
      <Main videoDetails={videoDetails} nextVideos={nextVideos} />
    </>
  );
}

export default MainVideoPage;
