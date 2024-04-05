import React from "react";
import "./NextVideos.scss";

const NextVideos = ({ nextVideos, onVideoSelect }) => {
  return (
    <section className="next-videos">
      <h2 className="next-videos__title section-header">NEXT VIDEOS</h2>
      <div className="next-videos__list">
        {nextVideos.map((video) => (
          <div
            key={video.id}
            className="next-videos__video"
            onClick={() => onVideoSelect(video.id)}
          >
            <div className="next-videos__video-img-wrapper">
              <img className="next-videos__video-img" src={video.image} alt={video.title} />
            </div>
            <div className="next-videos__video-details">
              <h3 className="next-videos__video-title">{video.title}</h3>
              <p className="next-videos__video-channel">{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextVideos;
