import React from "react";

import VideoDetailsInfo from "./VideoDetailsInfo";
import VideoComments from "../VideoComments/VideoComments";

import "./VideoDetails.scss";

const VideoDetails = ({ videoDetails, handleVideoLike }) => {
  const { id, title, description, comments = [] } = videoDetails;

  return (
    <section className="video-details">
      <div className="video-details__title">{title}</div>

      <VideoDetailsInfo
        videoDetails={videoDetails}
        handleVideoLike={handleVideoLike}
      />

      <div className="video-details__description body-copy">{description}</div>

      <VideoComments videoId={id} comments={comments} />
    </section>
  );
};

export default VideoDetails;
