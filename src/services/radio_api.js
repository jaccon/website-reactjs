import axios from 'axios';
import config from '../config/config';

const radio_api_url = config.api_radio;
const radio_api = axios.create({ baseURL: radio_api_url});
console.log(`Loading radio API from ${radio_api_url}`)

export default radio_api;