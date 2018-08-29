import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getJobStories } from '../store/index';

import './styles.css';

const mapDispatchToProps = dispatch => ({
  handleClick: getJobStories(dispatch)
});

class JobStories extends React.Component {
  render() {
    return (
      <span>
        <Link to="JobStories">
          <li className="nav_list_item" onClick={this.props.handleClick}>
            Jobs{' '}
          </li>
        </Link>
      </span>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(JobStories);
