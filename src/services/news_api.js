import axios from 'axios';
import config from '../config/config';

const news_api_url = config.api_news;

const news_api = axios.create({ 
    baseURL: news_api_url
});

export default news_api;