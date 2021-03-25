import axios from 'axios'
import { updateObject } from './utility';
import {getUserData} from "./../api/api";



const SET_USERS = 'SET_USERS';



export const myUser = (token) => {
  return dispatch => {
    getUserData.users(token)
    .then(res=> {
      const users = res.data;
        dispatch(setUsers(users));

    })
  }
}


let initialState = {
  users : []
}

export const setUsers = (users) => ({type: SET_USERS, users })


const usersReducer = (state = initialState, action) => {
    switch(action.type) {
      case SET_USERS:
        return {...state, users : action.users}
        default:
            return state;
         }
     }


export default usersReducer
