import React, { useState } from "react";

const VideoCommentForm = ({ videoId }) => {
  const [comment, setComment] = useState("");
  const [showCommentError, setShowCommentError] = useState(false);

  const handleCommentChange = (event) => {
    const newComment = event.target.value;
    setComment(newComment);
    setShowCommentError(newComment.trim() === "");
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="video-comments__add-form" onSubmit={handleCommentSubmit}>
      <label
        className="video-comments__add-form-header section-header"
        htmlFor="comment-field"
      >
        JOIN THE CONVERSATION
      </label>
      <div className="video-comments__add-form-container">
        <textarea
          required=""
          className={`video-comments__add-form-comment body-copy ${
            showCommentError ? "video-comments__add-form-comment--error" : ""
          }`}
          id="comment-field"
          name="comment"
          placeholder="Add a new comment"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button className="video-comments__add-form-button">COMMENT</button>
      </div>
    </form>
  );
};

export default VideoCommentForm;
