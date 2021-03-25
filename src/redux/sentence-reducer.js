import axios from 'axios'
import { updateObject } from './utility';
import {getSentence, postData} from "./../api/api";



const SET_SENTENCE = 'SET_SENTENCE';

const SET_VALUE = 'SET_VALUE'

export const mySentence = () => {
  return dispatch => {
    getSentence.sentence()
    .then(res=> {
      const sentence = res.data;
        dispatch(mySetSentence(sentence));

    })
  }
}


let initialState = {
  sentence : '',
  value : 'First'
}

export const mySetSentence = (sentence) => ({type: SET_SENTENCE, sentence })
export const mySetValue = (value) => ({type: SET_VALUE, value})

const sentenceReducer = (state = initialState, action) => {
    switch(action.type) {
      case SET_SENTENCE:
        return {...state, sentence : action.sentence}
      case SET_VALUE:
          return {...state, value : action.value}
        default:
            return state;

         }
     }

export const setValue = (value) => {
  return dispatch => {
      dispatch(mySetValue(value))
  }
}

export const postD = (postObj) =>{
       return dispatch => {
         postData.postAnswer(postObj)
         .then(res=>console.log(res))
       }
     }

export default sentenceReducer
