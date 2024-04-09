import axios from 'axios';

import { API_KEY, API_URL } from './api';

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
        }
      }
      return {};
    }
  }
};

const brainFlixApi = new BrainFlixApi(API_URL, API_KEY);

export default brainFlixApi;
