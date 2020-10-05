import axios from "axios";

export default axios.create({
    baseURL: "http://3.35.107.231:8080/",
    headers: {
        "Content-type": "application/json"
    }
});