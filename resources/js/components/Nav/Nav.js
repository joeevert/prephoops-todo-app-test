import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends Component {

  state = {
  }

  render() {
    return (
      <nav className="nav">
        <Link to="/">
          <h1 className="title">TODO List</h1>
        </Link>
        <div className="login-container">
          <Link to="/login" className="login-btn">Login/Logout</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
