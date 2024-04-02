import React from "react";
import "./Video.scss"; 

const Video = ({ videoDetails }) => {
  const { image } = videoDetails;
  return (
    <video poster={image}>
    </video>
  );
};

export default Video;
