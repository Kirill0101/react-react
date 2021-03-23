import * as axios from "axios";



const instance = axios.create({

    baseURL: window.location.origin,
    headers:     {
        "Authorization": "",
        "Content-Type" : "application/json",

    },
    withCredentials: false,
});


export const getSentence = {
    sentence() {
    return (instance.get(`api/tables/`))
    }
}


export const postData = {
  postAnswer (postObj){
  return(instance.post(`api/finals/`, postObj))
 }
}
