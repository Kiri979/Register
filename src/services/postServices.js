import axios from "axios"

export default class postService {
    static getAllPosts = () => {
        return axios.get("https://ojt-api.bib-apps.com/api/")
    }
}

export const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };