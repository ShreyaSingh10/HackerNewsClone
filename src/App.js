import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import StoryList from './components/StoryList.js';
import store from './store/';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignup.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Nav} />
            <Route exact path="/" component={StoryList} />
            <Route path="/loginSignup" component={LoginSignup} />
          </div>
        </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
