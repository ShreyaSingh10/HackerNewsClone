import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTopStories } from '../store/index.js';

import './styles.css';

const mapDispatchToProps = dispatch => ({
  handleClick: getTopStories(dispatch)
});

class TopStories extends React.Component {
  componentDidMount() {
    this.props.handleClick();
  }

  render() {
    return (
      <span>
        <Link to="/TopStories">
          <li
            className="nav_list_item"
            id="hacker"
            onClick={this.props.handleClick}
          >
            <b>Hacker News</b>
          </li>
        </Link>
      </span>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TopStories);
