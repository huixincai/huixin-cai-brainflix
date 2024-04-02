import React from "react";
import "./VideoDetails.scss";

const VideoDetails = ({ videoDetails }) => {
  const {
    title,
    channel,
    timestamp,
    views,
    likes,
    description,
    comments,
  } = videoDetails;

  return (
    <div className="video-details">
      <div className="video-details__title">{title}</div>
      <div className="video-details__info">
        <div className="video-details__info-channel">{channel}</div>
        <div className="video-details__info-timestamp">{timestamp}</div>
        <div className="video-details__info-views">{views}</div>
        <div className="video-details__info-likes">{likes}</div>
      </div>
      <div className="video-details__description">{description}</div>
      <div className="video-details__comments">
        <div className="video-details__comments-count">
          {comments.length} Comments
        </div>
        <div className="video-details__comments-add">Add a public comment</div>
        {comments.map((comment) => (
          <div className="video-details__comment" key={comment.id}>
            <div className="video-details__comment-user">{comment.user}</div>
            <div className="video-details__comment-timestamp">
              {comment.timestamp}
            </div>
            <div className="video-details__comment-message">
              {comment.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoDetails;
