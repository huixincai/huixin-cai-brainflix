import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import brainFlixApi from "../../utils/brain-flix-api";

import "./VideoUpload.scss";

const IMAGE_SRC = "http://localhost:8080/images/Upload-video-preview.jpg";

const VideoUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [showTitleError, setShowTitleError] = useState(false);
  const [showDescriptionError, setShowDescriptionError] = useState(false);

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    setShowTitleError(newTitle.trim() === "");
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
    setShowDescriptionError(newDescription.trim() === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      setShowTitleError(title.trim() === "");
      setShowDescriptionError(description.trim() === "");
      return;
    }

    await brainFlixApi.addVideo({
      title,
      description,
      image: IMAGE_SRC,
    });

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
              src={IMAGE_SRC}
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
              className={`upload__form-upload-input ${
                showTitleError ? "upload__form-upload-input--error" : ""
              }`}
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
              className={`upload__form-upload-input upload__form-upload-input--textarea ${
                showDescriptionError ? "upload__form-upload-input--error" : ""
              }`}
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
