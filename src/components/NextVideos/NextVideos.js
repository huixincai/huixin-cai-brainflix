import React from "react";
import "./NextVideos.scss";

const NextVideos = ({ videoList, onVideoSelect }) => {
  return (
    <div className="next-videos">
      <h2 className="next-videos__title">Next Videos</h2>
      <div className="next-videos__list">
        {videoList.map((video) => (
          <div
            key={video.id}
            className="next-videos__video"
            onClick={() => onVideoSelect(video.id)}
          >
            <img src={video.image} alt={video.title} />
            <div className="next-videos__video-details">
              <h3 className="next-videos__video-title">{video.title}</h3>
              <p className="next-videos__video-channel">{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextVideos;
