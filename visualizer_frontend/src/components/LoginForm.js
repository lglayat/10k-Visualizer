import React from 'react'
import { loginUser } from '../services/user'
import { signIn } from '../actions/user'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }


  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.username && this.state.password){
      const loginParams = { username: this.state.username, password: this.state.password}
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

    const style={
      'maxWidth': '50vh'
    }

      return (


      <div class="ui middle aligned center aligned grid">

        <div style={style} class="column">
          <h2 class="ui image header">

          <div class="content">
            Sign in here!
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
                Login
              </button>
            </div>
          </form>



          <div class="ui message">
            <NavLink to="/signup">Sign up</NavLink>
          </div>

        </div>
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
