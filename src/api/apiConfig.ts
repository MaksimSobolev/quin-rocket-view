import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `https://lldev.thespacedevs.com/2.2.0`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
