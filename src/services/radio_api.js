import axios from 'axios';

const radio_api = axios.create({ baseURL: 'https://zet.pluginsandthemes.ro/http://cloud2.cdnseguro.com:23538/stats?sid=1&my_rand=0.6153947396049544'});

export default radio_api;