import React from 'react';
import './styles.css';
import axios from 'axios';
import { connect } from 'react-redux';

class  New extends React.Component{
  render(){
  return(
    <span>
      <li className="nav_list_item"  onClick={this.props.handleClick}>new |</li>
    </span>
  );
}
}
const mapStateToProps = state => {
  //console.log("stateNav", state);
  return {
    stories: state.stories
  };
};
const mapDispatchToProps = dispatch => {
  return {
  handleClick: function () {
    let requests=[];
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then((result) => {
        result.data.map((id,index)=>{
          if(index<30){
          requests.push(axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json'))
          }
        })
        console.log(requests);
        Promise.all(requests).then(values=>{
          console.log(values);
          dispatch({
            type: 'STORIES',
            stories: values
          });
        })
    })
  }
}
};
export default connect(
  mapStateToProps,mapDispatchToProps
)(New);
