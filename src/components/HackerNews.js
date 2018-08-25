import React from 'react';
import './styles.css';
import axios from 'axios';
import { connect } from 'react-redux';

class HackerNews extends React.Component {
  componentDidMount(){
    this.props.handleClick();
  }
  render(){
    return(
      <span>
          <li className="nav_list_item" id="hacker" onClick={this.props.handleClick}><b>Hacker News</b></li>
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
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
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
  mapDispatchToProps,
  mapDispatchToProps
)(HackerNews);
