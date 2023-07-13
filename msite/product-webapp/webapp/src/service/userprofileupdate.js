import axios from "axios";


// const BASE_API_URL = "http://localhost:8080/userprofile";
const BASE_API_URL ="https://MSite.stackroute.io/userprofile";

export function updateUserProfile(updateProfilee){
    return axios.put(BASE_API_URL + "/user/contactno",updateProfilee);
}