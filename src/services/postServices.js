import axios from 'axios';
import { API_URL } from '../utils/constant/constant';
export default class postService {
  static getAllPosts = () => {
    return axios.get(API_URL + 'blog-posts/all');
  };

  static createPost = (postData) => {
    return axios.post(API_URL + 'blog-posts', postData);
  };

    // static createPost = (postData, authToken) => {
    //     return axios.post(API_URL + 'blog-posts', postData, {
    //     headers: {
    //         Authorization: `Bearer ${authToken}`,
    //     },
    //     });
    // };
    

}
