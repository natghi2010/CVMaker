
import axios from "axios"

const http =  {
    get: (url) => {
        return axios.get(url);
    },
    post: (url, data) => {
        return axios.post(url, data);
    }
}


export default http;

 







