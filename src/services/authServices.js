import axios from "axios";
import { API_URL } from "../utils/constant/constant";

export default class authService {
    static createUser = (userData) => {
        console.log(userData);
        return axios.post(API_URL + 'users', userData, {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
        })
      };
      
      static login = (email, password) => {
        console.log({ email, password });
        return axios.post(API_URL + 'auth/login', { email, password }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
    }
    

}
