import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNewStories } from '../store/index';
import './styles.css';

const mapDispatchToProps = dispatch => ({
  handleClick: getNewStories(dispatch)
});

class NewStories extends React.Component {
  render() {
    return (
      <span>
        <Link to="/NewStories">
          <li className="nav_list_item" onClick={this.props.handleClick}>
            new{' '}
          </li>
        </Link>
      </span>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewStories);
