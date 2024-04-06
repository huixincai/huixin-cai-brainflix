import React from "react";

import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

import { timestampToMMDDYYYY } from "../../utils/datetime";

import "./VideoDetails.scss";

const VideoDetails = ({ videoDetails }) => {
  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  const { title, channel, timestamp, views, likes, description, comments } =
    videoDetails;

  return (
    <section className="video-details">
      <div className="video-details__title">{title}</div>

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

      <div className="video-details__description body-copy">{description}</div>

      <div className="video-details__comments">
        <div className="video-details__comments-count section-header">
          {comments.length} Comments
        </div>
        <div className="video-details__comments-add">
          <img
            className="video-details__comments-add-img"
            src={userAvatar}
            alt="User avatar"
          />
          <form className="video-details__comments-add-form">
            <label
              className="video-details__comments-add-form-header section-header"
              htmlFor="comment-field"
            >
              JOIN THE CONVERSATION
            </label>
            <div className="video-details__comments-add-form-container">
              <textarea
                required=""
                className="video-details__comments-add-form-comment body-copy"
                id="comment-field"
                name="comment"
                placeholder="Add a new comment"
              ></textarea>
              <button className="video-details__comments-add-form-button">
                COMMENT
              </button>
            </div>
          </form>
        </div>
        {comments.map((comment) => (
          <div className="video-details__comment body-copy" key={comment.id}>
            <div className="video-details__comment-avatar">
              <div className="video-details__comment-avatar-img"></div>
            </div>
            <div className="video-details__comment-container">
              <div className="video-details__comment-header">
                <div className="video-details__comment-name">
                  {comment.name}
                </div>
                <div className="video-details__comment-timestamp">
                  {timestampToMMDDYYYY(comment.timestamp)}
                </div>
              </div>
              <div className="video-details__comment-message">
                {comment.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoDetails;
