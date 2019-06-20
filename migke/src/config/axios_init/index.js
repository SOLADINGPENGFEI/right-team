import axios from 'axios'

axios.defaults.baseURL = 'http://yqweb.qlzhx.cn/index.php/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;


axios.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    config.data == undefined ? config.data = {} : false;
    config.data.token = '9a15f03ffdff4ddef0414fb120fa4834351f00c0';
    config.data.user_id = store.getters.getUserId;
    console.log(config.data)
    return config;
}, (error) => {
    // 对请求错误做些什么
    // console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    // 对响应数据做点什么
    // console.log(response);
    // response.data = response.data.replace(/\<\?php/g, '');
    // response.data = JSON.parse(response.data);
    console.log(response.data);
    return Promise.resolve(response.data);
}, (error) => {
    // 对响应错误做点什么
    // console.log(error);
    return Promise.resolve(error);
});

export default axios