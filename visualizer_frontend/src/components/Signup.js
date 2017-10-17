import React from 'react'
import { NavLink } from 'react-router-dom'

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
    const style={
      'maxWidth': '50vh'
    }
      return (

        <div class="ui middle aligned center aligned grid">
          <div style={style} class="column">
            <h2 class="ui image header">
            <div class="content">
              Sign-Up
            </div>
            </h2>
            <form class="ui large form" onSubmit={this.handleSubmit}>
              <div class="ui stacked secondary  segment">
                <div class="field">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input type="text" onChange={this.handleUsernameChange} value={this.state.username}/>
                  </div>
                </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
                </div>
              </div>
                <button class="ui fluid large teal submit button" type="submit" value="Submit">
                  SignUp
                </button>
              </div>
            </form>

            <div class="ui message">
              <NavLink to="/login">Log In</NavLink>
            </div>

          </div>
        </div>






      )
  }
}

export default Signup
