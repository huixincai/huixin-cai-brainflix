import axios from "axios";

import { API_KEY, API_URL } from "./api";

class BrainFlixApi {
  /**
   * The constructor accepts URL and API key as parameters and sets them as instance properties on the class.
   *
   * @param {string} baseUrl
   * @param {string} apiKey
   */
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  /**
   * Returns an array of video objects
   *
   * @returns {object[]}
   */
  async getVideos() {
    try {
      const response = await axios.get(`${this.baseUrl}/videos`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if ((status === 400 || status === 404) && data?.message) {
          alert(data.message);
        }
      }
      return [];
    }
  }

  /**
   * Returns a detailed object of a single video
   *
   * @param {string} id
   *
   * @returns {object}
   */
  async getVideoById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/videos/${id}`, {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if ((status === 400 || status === 404) && data?.message) {
          alert(data.message);
          return;
        }
      }
      alert("An error occurred while uploading the video");
    }
  }

  /**
   * Add a new video. A unique id must be generated for each video added.
   * Returns the newly created video object.
   *
   * @param {object} payload 
   * @returns {object}
   */
  async addVideo(payload) {
    try {
      const response = await axios.post(`${this.baseUrl}/videos`, payload, {
        params: {
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if ((status === 400 || status === 404) && data?.message) {
          alert(data.message);
          return;
        }
      }
      alert("An error occurred while uploading the video");
    }
  }

  /**
   * Increments the like count of the video specified by videoId.
   * Returns the updated video object.
   *
   * @param {string} videoId 
   * @returns {object}
   */
  async likeVideo(videoId) {
    try {
      const response = await axios.put(
        `${this.baseUrl}/videos/${videoId}/likes`,
        {},
        {
          params: {
            api_key: this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if ((status === 400 || status === 404) && data?.message) {
          alert(data.message);
          return;
        }
      }
      alert("An error occurred while liking the video");
    }
  }
}

const brainFlixApi = new BrainFlixApi(API_URL, API_KEY);

export default brainFlixApi;
