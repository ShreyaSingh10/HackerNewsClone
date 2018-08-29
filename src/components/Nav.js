import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StoryList from './StoryList.js';
import NewStories from './NewStories.js';
import ShowStories from './ShowStories.js';
import JobStories from './JobStories.js';
import TopStories from './TopStories.js';

import './styles.css';


const Nav = () => (
    <div className="navigation_bar">
      <ul>
        <span className="stories_tabs">
          <TopStories/>
          <span className="story_types">
            <NewStories/>
            <ShowStories/>
            <JobStories/>
          </span>
        </span>
        <span className="login">
          <span className="username">Username |</span>
          <Link to="/loginSignup">login</Link>
        </span>
      </ul>
    </div>
  );

export default Nav;
