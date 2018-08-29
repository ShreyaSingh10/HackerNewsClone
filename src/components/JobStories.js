import React from 'react';
import { connect } from 'react-redux';

import { getJobStories } from '../store/index';

import './styles.css';

const mapDispatchToProps = dispatch => ({
  handleClick: getJobStories(dispatch)
})


class JobStories extends React.Component{
  render(){
    return(
      <span>
        <li className="nav_list_item" onClick={this.props.handleClick}>Jobs </li>
      </span>
    );
  }
}

export default connect(
null,mapDispatchToProps
)(JobStories);
