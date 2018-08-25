import {createStore} from 'redux';

const initialState={
  stories:[],
  user:''
};

const reducer = (state= initialState, action) =>{
  console.log("reducer", action);
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

const store = createStore(reducer);

export default store;
