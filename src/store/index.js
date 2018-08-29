import { createStore } from 'redux';
import axios from 'axios';

const initialState={
  stories:[]
};

const reducer = (state= initialState, action) =>{
  //console.log("reducer", action);
  switch (action.type){
    case 'INITIAL_STORIES':
      return Object.assign({}, state, {
        stories:action.stories
      } )
    case 'STORIES':
      return Object.assign({}, state, {
        stories:action.stories
      } )
    case 'NEW_STORIES':
      return Object.assign({}, state, {
        stories: action.stories
      } )
    case 'SHOW_STORIES':
      return Object.assign({}, state, {
        stories: action.stories
      } )
    case 'JOB_STORIES':
      return Object.assign({}, state, {
        stories: state.stories.concat(action.stories)
      } )
    default:
     return state;
  }

}
export const getTopStories = dispatch => () => {
  let requests=[];
  axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((result) => {
      result.data.map((id,index)=>{
        if(index<30){
        requests.push(axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json'))
        }
      })
      //console.log(requests);
      Promise.all(requests).then(values=>{
        //console.log(values);
        dispatch({
          type: 'STORIES',
          stories: values
        });
      })
  })
}
export const getJobStories = dispatch => () => {
  let requests=[];
  axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json')
    .then((result) => {
      result.data.map((id,index)=>{
        if(index<30){
        requests.push(axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json'))
        }
      })
      //console.log(requests);
      Promise.all(requests).then(values=>{
        //console.log(values);
        dispatch({
          type: 'STORIES',
          stories: values
        });
      })
  })
}
export const getShowStories = dispatch =>()=> {
  let requests=[];
  axios.get('https://hacker-news.firebaseio.com/v0/showstories.json')
    .then((result) => {
      result.data.map((id,index)=>{
        if(index<30){
        requests.push(axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json'))
        }
      })
      //console.log(requests);
      Promise.all(requests).then(values=>{
        //console.log(values);
        dispatch({
          type: 'STORIES',
          stories: values
        });
      })
  })
}
export const getNewStories = dispatch =>()=> {
  let requests=[];
  axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then((result) => {
      result.data.map((id,index)=>{
        if(index<30){
        requests.push(axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json'))
        }
      })
      //console.log(requests);
      Promise.all(requests).then(values=>{
        //console.log(values);
        dispatch({
          type: 'STORIES',
          stories: values
        });
      })
  })
}

const store = createStore(reducer);

export default store;
