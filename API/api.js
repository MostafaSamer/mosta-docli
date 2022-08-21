import axios from 'axios';

export default function apiCall(method, path, data = {}) {

  const BaseUrl = process.env.BASEURL

    axios.interceptors.request.use(req => {
        // console.log(`${req.method} ${req.url}`);
        // Important: request interceptors **must** return the request.
        return req;
      });

      axios.interceptors.response.use(res => {
        // console.log(res);
        // Important: response interceptors **must** return the response.
        return res.data && !res.describtionEN? res.data : res;
      });
      

    return axios[method.toLowerCase()](BaseUrl + path, data)
        .then(res => {
            return Promise.resolve(res)
        })
        .catch((err) => {
            // console.log(err);
            return Promise.reject(err);
        });
}
