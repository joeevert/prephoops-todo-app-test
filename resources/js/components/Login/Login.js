import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {

  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    // if (this.state.username && this.state.password) {
    //   this.props.dispatch({
    //     type: 'LOGIN',
    //     payload: {
    //       username: this.state.username,
    //       password: this.state.password,
    //     },
    //   });
    // } else {
    //   this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    // }
  } // end login

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  registerMode = () => {
    console.log('registerMode');
  }

  render() {
    console.log('state', this.state);
    return (
      // <div>
        /* {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )} */
      <div className="text-center">
        <form className="form-signin" onSubmit={this.login}>
          <h1 className="h3 mb-3 font-weight-normal">LOG IN</h1>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Username" 
            required 
            autoFocus
            name="username"
            value={this.state.username} 
            onChange={this.handleChange}
          />
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            required
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange}
          />
          <button className="btn btn-lg btn-block loginBtn" type="submit">LOG IN</button>
        </form>
        <button className="btn btn-lg registerBtn" onClick={this.registerMode}>REGISTER</button>
      </div>
    );
  }
}

export default Login;
