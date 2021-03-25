import * as axios from "axios";



const instance = axios.create({

    baseURL: window.location.origin,
    headers:     {
        "Authorization": "",
        "Content-Type" : "application/json",

    },
    withCredentials: false,
});


export const authAPI = {
    login(email, password) {
      instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      instance.defaults.xsrfCookieName = "csrftoken";
        return instance.post(`dj-rest-auth/login/`, {email, password});
    },
}


export const getSentence = {
    sentence(token) {
    instance.defaults.headers["Authorization"] = "Token " + token

    return (instance.get(`api/tables/`))
    }
}

export const getUserData = {
    users(token) {
      instance.defaults.headers["Authorization"] = "Token " + token

      return (instance.get(`api/accounts/`))
    }
}


export const postUserData = {
  postUserD (postObj){
    instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    instance.defaults.xsrfCookieName = "csrftoken";
  return(instance.post(`api/accounts/`, postObj))
 }
}




export const postData = {
  postAnswer (postObj, token){
    instance.defaults.headers["Authorization"] = "Token " + token
  return(instance.post(`api/finals/`, postObj))
 }
}
