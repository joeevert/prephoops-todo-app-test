import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// components
import Nav from './components/Nav/Nav';
import ToDo from './components/ToDo/ToDo';

// import Login from './components/Login/Login';

export default class Index extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            {/* <Redirect exact from="/" to="/login" /> */}
            <Route exact path="/" component={ToDo} />
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/login" /> */}

          </div>
        </Router>
      </div>

    );
  }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
