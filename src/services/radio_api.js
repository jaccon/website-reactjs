import axios from 'axios';

const radio_api = axios.create({ baseURL: 'http://cloud2.cdnseguro.com:23538/stats?sid=1&my_rand=0.222222'});

export default radio_api;