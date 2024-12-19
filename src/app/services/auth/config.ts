import axios from "axios";

const apiRequests =  axios.create({
    baseURL: "http://localhost:2024" ,
    headers : {
        "Content-Type" : "application/json"
    }
})


export default apiRequests