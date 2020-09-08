import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.thenoviedb.org/3"
});


export default instance;