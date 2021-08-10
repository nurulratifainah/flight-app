import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_API, // url = base url + request url
  timeout: 5000,
});

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // Some example codes here:
    // code == 20000: success
    // code == 50001: invalid access token
    // code == 50002: already login in other place
    // code == 50003: access token expired
    // code == 50004: invalid user (user not exist)
    // code == 50005: username or password is incorrect
    // You can change this part for your own usage.
    const res = response.data;
    console.log(response)
    if (response.status !== 200) {
      /*Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                MessageBox.confirm(
                    '你已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() => {
                    UserModule.ResetToken()
                    location.reload() // To prevent bugs from vue-router
                })
            }*/
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return response.data;
    }
  },
  (error:any) => {
    /* Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })*/
    return Promise.reject(error);
  }
);

export default service;
