import React from 'react';
import './styles.css';
import StoryList from './StoryList.js';
import axios from 'axios';
import { connect } from 'react-redux';
import New from './New.js';
import Show from './Show.js';
import Jobs from './Jobs.js';
import HackerNews from './HackerNews.js';
import { Link } from 'react-router-dom';

function Nav (props){
  return(
    <div className="navigation_bar">
      <ul>
        <span className="stories_tabs">
          <HackerNews/>
          <span className="story_types">
            <New/>
            <Show/>
            <Jobs/>
          </span>
        </span>
        <span className="login">
          <span className="username">Username |</span>
          <Link to="/loginSignup">login</Link>
        </span>
      </ul>
    </div>
  );
}

export default Nav;
