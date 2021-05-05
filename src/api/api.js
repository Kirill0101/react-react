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
    sentence(token, n_exp) {
    instance.defaults.headers["Authorization"] = "Token " + token
      if (n_exp =='First'){
      return (instance.get(`api/tables/`))}
      else if (n_exp =='Second'){
      return (instance.get(`api/tables2/`))}

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


export const postUserQData = {
  postUserD (postObj){
    instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    instance.defaults.xsrfCookieName = "csrftoken";
  return(instance.post(`api/userq/`, postObj))
 }
}


export const postOrden = {
  postO (postObj){
    instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    instance.defaults.xsrfCookieName = "csrftoken";
    return(instance.post(`api/orden/`, postObj))
  }
}


export const postOrden1 = {
  postO (postObj,id){
    instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    instance.defaults.xsrfCookieName = "csrftoken";
    return(instance.patch(`api/orden/${id}/`, postObj))
  }
}

export const getOrden = {
  getO(){
    instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    instance.defaults.xsrfCookieName = "csrftoken";
    return(instance.get(`api/orden/`))
  }
}


export const postData = {
  postAnswer (postObj, token, exp_n){
    instance.defaults.headers["Authorization"] = "Token " + token
  if (exp_n == 'First'){
    return(instance.post(`api/finals/`, postObj))}
  else if (exp_n == 'Second'){
      return(instance.post(`api/finals2/`, postObj))}
 }
}
