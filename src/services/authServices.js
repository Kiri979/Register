import axios from "axios";
import { API_URL } from "../utils/constant/constant";
import { setConfig } from "../utils/constant/helper";

export default class authService {
    static createUser = (userData) => {
        console.log(userData);
        setConfig()
        return axios.post(API_URL + 'users', userData, )
      };
      
      static login = (email, password) => {
        console.log({ email, password });
        setConfig()
        return axios.post(API_URL + 'auth/login', { email, password },);
    }

    static checkUserTokenValid = (token) => {
      setConfig(token)
      return axios.get(API_URL + 'auth/me', )
    }
    
}     
