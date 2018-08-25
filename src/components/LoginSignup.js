import React from 'react';
import './styles.css';
import * as firebase from 'firebase';
//import Fire from './config/Fire.js';

class LoginSignup extends React.Component{
  render(){
    return(
      <div className="credentials">
        <h2>Login</h2>
        <form className="login-form">
          <table>
            <tbody>
              <tr>
                <td>username:</td>
                <td><input type="text"></input></td>
              </tr>
              <tr>
                <td>password:</td>
                <td><input type="password"></input></td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <button>login</button>
        </form>
        <br></br>
        <a href="#">Forgot your password? </a>
        <h2>Create Account</h2>
        <form className="signup-form">
          <table>
            <tbody>
              <tr>
                <td>username:</td>
                <td><input type="text"></input></td>
              </tr>
              <tr>
                <td>password:</td>
                <td><input type="password"></input></td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <button>create account</button>
      </form>
      </div>
    )
  }
}

export default LoginSignup;
