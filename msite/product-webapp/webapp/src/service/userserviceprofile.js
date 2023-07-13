import axios from "axios";


// const BASE_API_URL = "http://localhost:8080/userprofile";
const BASE_API_URL ="https://MSite.stackroute.io/userprofile";


 export function addUser  (user) {
    return axios.post(BASE_API_URL + "/user", user);

    
  
      

  }

export function loginuser(user){
    return axios.post(BASE_API_URL + "/userprofile",user);
}

  
  
