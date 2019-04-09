import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class ToDoTask extends Component {

  state = {
    editToggle: true,
    disabled: true,
    activeTask: null,
    edit: ''
  }

  componentDidMount() {
    this.props.getTasks();
  }

  // remove a task from the db
  deleteTask = (taskId) => {
    axios.delete(`/api/blog/${taskId}`).then(response => {
      this.props.getTasks();
    }).catch(error => {
      console.log('error', error);
    });
  }

  // alert window to confirm delete
  confirmDelete = (taskId) => {
    confirmAlert({
      title: 'Deleting Task',
      message: 'Are you sure about this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteTask(taskId)
        },
        {
          label: 'No',
        }
      ]
    })
  }

  // update the status of a task
  updateStatus = (taskId, taskStatus) => {
    if (taskStatus == 1 ) {
      taskStatus = 0;
    } else {
      taskStatus = 1;
    }
    axios.put(`/api/blog/${taskId}/status`, {status: taskStatus}).then(response => {
      this.props.getTasks();
    }).catch(error => {
      console.log('error', error);
    });
  }

  // toggles the input to allow editing
  editTask = (taskId) => {
    this.setState({
      editToggle: !this.state.editToggle,
      activeTask: taskId,
      disabled: this.state.activeTask !== taskId || !this.state.disabled
    });
  }

  // handle input change for editing a task
  handleEdit = (e) => {
    this.setState({
      edit: e.target.value
    });
  }

  // saves updates made to a task
  updateTask = (taskId) => {
    console.log('taskId', taskId);
    this.setState({
      editToggle: !this.state.editToggle,
      disabled: !this.state.disabled
    });
    axios.put(`/api/blog/${taskId}/edit`, {name: this.state.edit}).then(response => {
      this.props.getTasks();
      this.setState({
        edit: ''
      });
    }).catch(error => {
      console.log('error', error);
    });
  }

  render() {
    return (
      <ul>
      {this.props.blogs.map(blog =>
        <div key={blog.id} className="input-group mb-3">
          <div className="input-group-prepend">
            {/* <div className="input-group-text">
              <input 
                type="checkbox" 
                aria-label="Checkbox for following text input" 
                onChange={() => this.handleCheck(blog.id, this.state.status)} 
                // checked={blog.status ? true : false}
                name="status"
                value={this.state.status}
              />
            </div> */}
          </div>
          <div className="input-group-append">
          {blog.status ? 
            <button 
              className="btn btn-success" 
              onClick={() => this.updateStatus(blog.id, blog.status)}
            >
                <i className="fas fa-check-circle"></i> 
            </button>
          :
            <button 
              className="btn btn-outline-secondary"
              onClick={() => this.updateStatus(blog.id, blog.status)}
            >
                <i className="far fa-check-circle"></i> 
            </button>
          }
          </div>
          {(this.state.disabled && this.state.activeTask === blog.id) ? (
            <input
              type="text" 
              className="form-control" 
              value={this.state.edit} 
              disabled={false}
              placeholder={blog.name} 
              aria-label="Text input with checkbox"
              onChange={this.handleEdit}
            />
          ) : (
            <input
              type="text" 
              className="form-control" 
              value={blog.name} 
              disabled={true} 
              placeholder={blog.name} 
              aria-label="Text input with checkbox"
            />  
          )}
          <div className="input-group-append">
          {/* <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button> */}
          { this.state.editToggle ? 
            <button 
              className="btn btn-outline-secondary" 
              onClick={() => this.editTask(blog.id)}
            >
              <i className="fas fa-edit"></i>
            </button>
            :
            <button 
              className="btn btn-outline-secondary" 
              onClick={() => this.updateTask(blog.id)}
            >
              <i className="fas fa-save"></i>
            </button>
          }
            <button 
              className="btn btn-outline-danger" 
              data-toggle="modal" 
              data-target="#exampleModal"
              onClick={() => this.confirmDelete(blog.id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      )}
      </ul>
    );
  }
}

export default ToDoTask;
