import axios from 'axios'
import { updateObject } from './utility';
import {authAPI} from "./../api/api";


const AUTH_START = 'AUTH_START';
const AUTH_SUCCESS = 'AUTH_SUCCES';
const AUTH_FAIL = 'AUTH_FAIL';
const AUTH_LOGOUT = 'AUTH_LOGOUT';
const AUTH_EMAIL = 'AUTH_EMAIL'

let initialState = {
  token: null,
  email: null,
  error: null,
  loading: false,
  isAuth : false
}



const authReducer = (state = initialState, action) => {
    switch(action.type) {
      case AUTH_START:
        return {
            ...state,
            error: null,
            loading: true
        }

        case AUTH_SUCCESS:
          return {
          ...state,
          token: action.token,
          error: null,
          loading : false,
          isAuth : true
        }

        case AUTH_FAIL:
          return {
            ...state,
            error: action.error,
            loading: false
          }
        case AUTH_LOGOUT:
          return {
          ...state,
          token: null,
          email: null,
          isAuth : false
        }
        case AUTH_EMAIL:
        return{
          ...state,
          email: action.email
        }

        default:
            return state;


    }
}



export const authStart = () => ({type: AUTH_START})
export const authSuccess = (token) => ({type: AUTH_SUCCESS,token : token, isAuth : true})
export const authFail = error => ({type: AUTH_FAIL,error : error})
export const authEmail = (email) => ({type: AUTH_EMAIL,email : email})
export const logout = () => {
  localStorage.removeItem('token');

  //localStorage.removeItem('expirationDate');

  return {
    type: AUTH_LOGOUT,
    isAuth:false
  }
}

/*
export const checkAuthTimeout = expirationDate => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationDate * 1000)
  }
}
*/


export const authLogin = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    authAPI.login(email, password)
    .then(res=> {
      const token = res.data.key;

      //const expirationDate = new Date(new Date().getTime() + 3600 *1000)
      localStorage.setItem('token',token);
      //localStorage.setItem('expirationDate',token);

      dispatch(authSuccess(token));
    //  dispatch(checkAuthTimeout(3600))

    })
    .catch(err =>{
      dispatch(authFail(err))
    })
  }
}


export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (token === undefined){
      dispatch(logout())
    } else{
        dispatch(authSuccess(token))
        //const expirationDate = new Date(localStorage.getItem('expirationDate'))
        /*
        if (expirationDate <= new Date()){
          dispatch(logout());
        } else {
          dispatch(authSuccess(token));
          dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000))}
          */
    }
  }
}





export default authReducer
