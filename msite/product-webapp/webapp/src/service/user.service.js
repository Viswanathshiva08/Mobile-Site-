import axios from "axios";


//   const BASE_API_URL = "http://localhost:8080/userprofile";
const BASE_API_URL ="https://MSite.stackroute.io/userprofile";

export function getPayByuserame(username){
    return axios.get(BASE_API_URL + "/user/"+username);
}
export function updateBalence(user){
    return axios.put(BASE_API_URL+"/balance",user);
}
