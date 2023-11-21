import axios from "axios";

export const setConfig = (token) => {
  axios.defaults.baseURL = "https://ojt-api.bib-apps.com/api/";
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  axios.defaults.headers.post["Content-Type"] = "application/json";
};

const localImages = [
  require('../../assets/image/img_post02.png'),
  require('../../assets/image/img_post03.png'),
  require('../../assets/image/img_post04.png'),
  require('../../assets/image/img_post05.png'),
  require('../../assets/image/img_post06.png'),
];
