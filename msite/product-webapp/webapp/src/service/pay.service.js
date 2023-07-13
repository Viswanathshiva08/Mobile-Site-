import axios from "axios";

// const BASE_API_URL = "http://localhost:8080/payment";
const BASE_API_URL ="https://MSite.stackroute.io/payment";



   export function savePay(pay){
        return axios.post(BASE_API_URL + "/onSuccess", pay);
    }
    
       
    export function getPayBycustomerName(customerName){
        return axios.get(BASE_API_URL + "/paymnets/"+customerName);
    }
 


