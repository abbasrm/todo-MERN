import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-c6618.firebaseio.com/',
    crossdomain: true,
    origin: true
});

export default instance;