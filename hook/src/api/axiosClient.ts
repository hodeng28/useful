import axios from 'axios';

const instance = axios.create({
  timeout: 100000
});

instance.defaults.headers.common['Cache-Control'] =
  'no-cache, no-store, must-revalidate'; // for all requests

export default instance;
