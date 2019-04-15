import axios from 'axios';
import config from '../config/config';

const github_api_url = config.api_github;

const github_api = axios.create({ 
    baseURL: github_api_url
});

export default github_api;