import React, { Component } from "react";
import { createProject } from "../../store/actions/ProjectActions";
import { connect } from "react-redux";
class ProjectCreate extends Component {
  state = {
    title: "",
    content: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.setState({
      title: "",
      content: "",
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gray-text text-darken-2">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">content</label>
            <input
              type="text"
              id="content"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </div>
          <button className="btn red darken-3 z-depth-0">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProjectCreate);
