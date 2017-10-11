import React from 'react'
import { loginUser } from '../services/user'
import { Redirect } from 'react-router-dom'


class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }


  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Clicking Button", this.state.username, this.state.password)

    if(this.state.username && this.state.password){
      const loginParams = { username: this.state.username, password: this.state.password}
      this.props.onLogin(loginParams)
      this.setState({
        username: "",
        password: ""
      })

    }
  }


  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })

  }


  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })

  }
  render() {

    console.log("RENDERING", this)
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username}/>
          <input type="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          <input type="submit" value="Submit"/>
        </form>
      )

  }


}

export default LoginForm
