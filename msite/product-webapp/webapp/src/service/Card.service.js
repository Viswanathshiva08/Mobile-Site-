import axios from "axios";

// const BASE_API_URL ="http://localhost:8080/userprofile";
const BASE_API_URL ="https://MSite.stackroute.io/userprofile";

export function saveCard(Card)
{
    return axios.post(BASE_API_URL + "/card",Card);

}
export function getCardbyUsername(username)
{
    return axios.get (BASE_API_URL + "/card/user/"+username);
}
