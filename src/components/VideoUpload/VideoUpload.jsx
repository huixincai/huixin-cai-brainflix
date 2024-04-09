import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import thumbnail from "../../assets/images/Upload-video-preview.jpg";

import "./VideoUpload.scss";

const VideoUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    if (newTitle.trim() === "") {
      event.target.classList.add("upload__form-upload-input--error");
    } else {
      event.target.classList.remove("upload__form-upload-input--error");
    }
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
    if (newDescription.trim() === "") {
      event.target.classList.add("upload__form-upload-input--error");
    } else {
      event.target.classList.remove("upload__form-upload-input--error");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Video uploaded!");
    navigate("/");
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form" onSubmit={handleSubmit}>
        <div className="upload__form-container">
          <div className="upload__form-thumbnail">
            <label className="upload__form-thumbnail-label section-header">
              VIDEO THUMBNAIL
            </label>
            <img
              src={thumbnail}
              alt="video upload thumbnail"
              className="upload__form-thumbnail-img"
            />
          </div>
          <div className="upload__form-upload">
            <label
              className="upload__form-upload-label section-header"
              htmlFor="title"
            >
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__form-upload-input"
              type="text"
              id="title"
              name="title"
              placeholder="Add a title to your video"
              value={title}
              onChange={handleTitleChange}
            />
            <label
              className="upload__form-upload-label section-header"
              htmlFor="description"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__form-upload-input upload__form-upload-input--textarea"
              id="description"
              name="description"
              placeholder="Add a description to your video"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <div className="upload__form-button-group">
          <button
            className="upload__form-button upload__form-button--publish"
            type="submit"
          >
            PUBLISH
          </button>
          <button
            className="upload__form-button upload__form-button--cancel"
            disabled
          >
            CANCEL
          </button>
        </div>
      </form>
    </section>
  );
};

export default VideoUpload;
