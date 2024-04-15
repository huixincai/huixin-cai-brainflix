import React from "react";

import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

import { timestampToMMDDYYYY } from "../../utils/datetime";

const VideoDetailsInfo = ({ videoDetails }) => {
  const { channel, timestamp, views, likes } = videoDetails;

  return (
    <div className="video-details__info body-copy">
      <div className="video-details__info-container">
        <div className="video-details__info-channel">By {channel}</div>
        <div className="video-details__info-timestamp">
          {timestampToMMDDYYYY(timestamp)}
        </div>
      </div>
      <div className="video-details__info-container">
        <div className="video-details__info-views">
          <img
            src={viewsIcon}
            alt="Views icon"
            className="video-details__info-icon"
          />
          {views}
        </div>
        <div className="video-details__info-likes">
          <img
            src={likesIcon}
            alt="Likes icon"
            className="video-details__info-icon"
          />
          {likes}
        </div>
      </div>
    </div>
  );
};

export default VideoDetailsInfo;
