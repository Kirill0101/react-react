import axios from 'axios'
import { updateObject } from './utility';
import {getSentence, postData} from "./../api/api";



const SET_SENTENCE = 'SET_SENTENCE';



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
  sentence : ''
}

export const mySetSentence = (sentence) => ({type: SET_SENTENCE, sentence })


const sentenceReducer = (state = initialState, action) => {
    switch(action.type) {
      case SET_SENTENCE:
        return {...state, sentence : action.sentence}
        default:
            return state;
         }
     }


export const postD = (postObj) =>{
       return dispatch => {
         postData.postAnswer(postObj)
         .then(res=>console.log(res))
       }
     }

export default sentenceReducer
