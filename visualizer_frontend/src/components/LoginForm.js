import React from 'react'
import { loginUser } from '../services/user'
import { Redirect } from 'react-router-dom'
import { signIn } from '../actions/user'
import { connect } from 'react-redux'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }


  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.username && this.state.password){
      const loginParams = { username: this.state.username, password: this.state.password}
      // this.props.onLogin(loginParams)
      this.props.signIn(loginParams, this.props)

      this.setState({
        username: "",
        password: ""
      })
    }
  }

  login = (loginParams) => {
    loginUser(loginParams)
      .then((resp) => {
        localStorage.setItem("jwtToken", resp.jwt)
        this.setState({
          user: resp,
          isLoggedIn: true,
          name: resp.user.username,
          id: resp.user.id
        })
      })
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
      return (
        <div>
          <h1> Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username}/>
          <input type="password" placeholder="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          <input type="submit" value="Submit"/>
        </form>
        </div>
      )
  }
}

export function mapDispatchToProps(dispatch){
  return {
    signIn: (user, props) => {
      dispatch(signIn(user, props))
    }
  }
}



export default connect(null, mapDispatchToProps)(LoginForm)
