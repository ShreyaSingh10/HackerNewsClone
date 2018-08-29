import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getShowStories } from '../store/index';

import './styles.css';

const mapDispatchToProps = dispatch => ({
  handleClick: getShowStories(dispatch)
})

class ShowStories extends React.Component{
  render(){
    return(
      <span>
        <Link to ='/showstories' onClick={ e => e.preventDefault() }>
          <li className="nav_list_item" onClick={this.props.handleClick}>show |</li>
        </Link>
      </span>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ShowStories);
