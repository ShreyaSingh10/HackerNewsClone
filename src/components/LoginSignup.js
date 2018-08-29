import React from 'react';

import './styles.css';

class LoginSignup extends React.Component {
  render() {
    return (
      <div className="credentials">
        <h2>Login</h2>
        <form className="login-form">
          <table>
            <tbody>
              <tr>
                <td>username:</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>password:</td>
                <td>
                  <input type="password" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button>login</button>
        </form>
        <br />
        <a href="#">Forgot your password? </a>
        <h2>Create Account</h2>
        <form className="signup-form">
          <table>
            <tbody>
              <tr>
                <td>username:</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>password:</td>
                <td>
                  <input type="password" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button>create account</button>
        </form>
      </div>
    );
  }
}

export default LoginSignup;
