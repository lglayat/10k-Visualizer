import React from 'react'
import { Redirect } from 'react-router-dom'

class Signup extends React.Component {

  state = {
    username: '',
    password: ''
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

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log("Clicking Button", this.state.username, this.state.password)

    if(this.state.username && this.state.password){
      var loginParams = { username: this.state.username, password: this.state.password}
    }

    const body = JSON.stringify(loginParams)

    fetch("http://localhost:3000/api/v1/signup", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(resp => {
      this.setState({
        username: "",
        password: ""
      })
    })
    .then(resp => this.props.history.replace('/', null))

  }


  render() {
      return (
        <div>
          <div>Enter a new username and password</div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username}/>
            <input type="password" name="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      )
  }
}

export default Signup
