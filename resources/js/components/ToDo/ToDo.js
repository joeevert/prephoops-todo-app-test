import React, { Component } from 'react';
import './ToDo.scss';

// components
import ToDoAddTask from './ToDoAddTask';
import ToDoTask from './ToDoTask';

class ToDo extends Component {

  state = {
    blogs: [],
  }

  // get all the tasks from the db
  getTasks = () => {
    axios.get('/api/blog').then(response => {
      this.setState({
        blogs: response.data
      });
    }).catch(error => {
      console.log('error', error);
    });
  }

  render() {
    return (
      <div className="container">
        <ToDoAddTask getTasks={this.getTasks} />
        <div className="tasks">
         <ToDoTask getTasks={this.getTasks} blogs={this.state.blogs} />
        </div>
      </div>
    );
  }
}

export default ToDo;
