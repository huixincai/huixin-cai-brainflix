import React from "react";

import Video from "../Video/Video";
import VideoDetails from "../VideoDetails/VideoDetails";
import NextVideos from "../NextVideos/NextVideos";

import "./Main.scss";

const Main = ({ videoDetails, nextVideos, handleVideoLike }) => {
  return (
    <main className="main">
      {videoDetails && <Video videoDetails={videoDetails} />}
      <div className="main__wrapper">
        {videoDetails && (
          <VideoDetails
            videoDetails={videoDetails}
            handleVideoLike={handleVideoLike}
          />
        )}
        <NextVideos nextVideos={nextVideos} />
      </div>
    </main>
  );
};

export default Main;
