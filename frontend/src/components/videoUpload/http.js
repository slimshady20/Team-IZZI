import axios from "axios";

export default axios.create({
    baseURL: "http://3.35.107.231:8080/",
    mode: 'no-cors'
});