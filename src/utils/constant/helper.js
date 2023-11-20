import axios from 'axios';

// export const defaultHttpConfig = (token = "") => {
//   return {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + token,
//     },
//   };
// };

export const setConfig = (token) => {
  axios.defaults.baseURL = 'https://ojt-api.bib-apps.com/api/';
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token ;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
}