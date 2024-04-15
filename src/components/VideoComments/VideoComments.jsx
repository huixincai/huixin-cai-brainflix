import React from "react";

import VideoCommentForm from "./VideoCommentForm";
import VideoCommentDetails from "./VideoCommentDetails";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

import "./VideoComments.scss";

const VideoComments = ({ videoId, comments }) => {
  return (
    <div className="video-comments">
      <div className="video-comments-count section-header">
        {comments.length} Comments
      </div>
      <div className="video-comments__add">
        <img
          className="video-comments__add-img"
          src={userAvatar}
          alt="User avatar"
        />
        <VideoCommentForm videoId={videoId} />
      </div>
      {comments.map((commentDetails) => (
        <VideoCommentDetails
          key={commentDetails.id}
          commentDetails={commentDetails}
        />
      ))}
    </div>
  );
};

export default VideoComments;
