import React from 'react';
import { connect } from 'react-redux';

import { getNewStories } from '../store/index';
import './styles.css';


const mapDispatchToProps = dispatch => ({
  handleClick: getNewStories(dispatch)
})


class  NewStories extends React.Component{
  render(){
    return(
      <span>
        <li className="nav_list_item"  onClick={this.props.handleClick}>new |</li>
      </span>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewStories);
