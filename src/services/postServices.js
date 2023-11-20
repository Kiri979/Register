import axios from "axios";
import { API_URL } from "../utils/constant/constant";

export default class postService {
    static getAllPosts = () => {
        return axios.get(API_URL +'blog-posts/all')
    }
}
