import React from 'react';
import { connect } from 'react-redux';

import { getTopStories } from '../store/index.js';

import './styles.css';

const mapDispatchToProps = dispatch => ({
  handleClick: getTopStories(dispatch)
})

class TopStories extends React.Component {

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

export default connect(
  null,
  mapDispatchToProps
)(TopStories);
