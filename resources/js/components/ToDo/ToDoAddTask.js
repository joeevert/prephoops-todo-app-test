import React, { Component } from 'react';

class ToDoAddTask extends Component {

  state = {
    name: '',
  }

  // handle input change for adding a task
  handleChange = (e) => {
    this.setState({
      // task: e.target.value
      name: e.target.value
    });
  }

  // handle submit for adding a new task to the db
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/blog', this.state).then(response => {
      this.setState({
        // task: ''
        name: ''
      });
      this.props.getTasks();
    }).catch(error => {
      console.log('error', error);
    });
  }

  render() {
    return (
      <React.Fragment className="">
        <h1 className="text-center title">What needs to get done?</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control"
              // name="task"
              name="name" 
              placeholder="Add a new task..." 
              aria-label="Add a new task..." 
              aria-describedby="basic-addon2"
              onChange={this.handleChange}
              // value={this.state.task} 
              value={this.state.name} 
              autoFocus
            />
            <div className="input-group-append">
              <button 
                className="btn btn-outline-primary" 
                type="submit"
              >
                <i className="fas fa-plus-circle"></i>
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ToDoAddTask;
