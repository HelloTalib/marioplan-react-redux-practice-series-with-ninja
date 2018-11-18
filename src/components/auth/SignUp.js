import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gray-text text-darken-2">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} value={this.state.firstName} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} value={this.state.lastName} />
          </div>
          <div className="input-field">
            <label htmlFor="Email">Email</label>
            <input type="Email" id='email' onChange={this.handleChange} value={this.state.email} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} value={this.state.password} />
          </div>
          <button className="btn red darken-3 z-depth-0">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp
