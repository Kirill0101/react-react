import axios from 'axios'
import { updateObject } from './utility';
import {getUserData, postOrden, getOrden, postOrden1} from "./../api/api";



const SET_USERS = 'SET_USERS';
const SET_USERS_NUM = 'SET_USERS_NUM'


export const myUser = (token) => {
  return dispatch => {
    getUserData.users(token)
    .then(res=> {
      const users = res.data;
        dispatch(setUsers(users));

    })
  }
}

export const myOrden = (obj) =>{
  return dispatch => {
    postOrden.postO(obj)
    .then(res=>console.log(res))
  }
}

export const myOrden1 = (obj, id) =>{
  return dispatch => {
    postOrden1.postO(obj,id)
    .then(res=>console.log(res))
  }
}


export const youOrden = () =>{
  return dispatch => {
    getOrden.getO()
    .then(res=> {
      const users = res.data;
        dispatch(setUsersNumber(users));
    })
  }
}


let initialState = {
  users : [],
  users_number: []
}

export const setUsers = (users) => ({type: SET_USERS, users })

export const setUsersNumber = (users_n) => ({type: SET_USERS_NUM, users_n })



const usersReducer = (state = initialState, action) => {
    switch(action.type) {
      case SET_USERS:
        return {...state, users : action.users}
        default:
            return state;
      case SET_USERS_NUM:
          return {...state, users_number: action.users_n}
         }

     }


export default usersReducer
