import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

class StoryList extends React.Component{
  render(){
    //console.log("props", this.props);
    return(
      <div className="storyContainer">
        <ol>
          {this.props.stories && this.props.stories.map((item,index) =>
            <div className="story-list-item">
      				<li key={index}><a href={item.data.url}>{item.data.title}</a></li>
              <p>{item.data.score} points by {item.data.by}</p>
            </div>
    			)}
  			</ol>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    stories: state.stories,
    name: state.name
  };
};

export default connect(mapStateToProps)(StoryList);
