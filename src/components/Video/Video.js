import React from "react";
import "./Video.scss";

const Video = ({ videoDetails }) => {
  const { image } = videoDetails;
  return (
    <section className="video">
      <video className="video__player" poster={image} controls></video>
    </section>
  );
};

export default Video;
