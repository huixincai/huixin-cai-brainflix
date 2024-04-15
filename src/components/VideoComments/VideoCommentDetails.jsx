import React from "react";

import { timestampToMMDDYYYY } from "../../utils/datetime";

const VideoCommentDetails = ({ commentDetails }) => {
  return (
    <div className="video-comments__comment body-copy" key={commentDetails.id}>
      <div className="video-comments__comment-avatar">
        <div className="video-comments__comment-avatar-img"></div>
      </div>
      <div className="video-comments__comment-container">
        <div className="video-comments__comment-header">
          <div className="video-comments__comment-name">
            {commentDetails.name}
          </div>
          <div className="video-comments__comment-timestamp">
            {timestampToMMDDYYYY(commentDetails.timestamp)}
          </div>
        </div>
        <div className="video-comments__comment-message">
          {commentDetails.comment}
        </div>
      </div>
    </div>
  );
};

export default VideoCommentDetails;
