import axios from 'axios';
// apikey=8b845b19

export const BaseUrl = axios.create({
  baseURL: 'http://www.omdbapi.com',
});
