import React, { Component } from 'react';
import {  Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { loginUser, logoutUser } from './services/user'
import Authorize from './components/Authorize'
import Signup from './components/Signup'
import LoginForm from './components/LoginForm'
import 'semantic-ui-css/semantic.min.css'
import { Editor } from 'draft-js';
import ProfilePage from './components/ProfilePage'
import Homepage from './components/Homepage'
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class App extends Component {

    state = {
      user: '',
      isLoggedIn: false,
      id: ''
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

    logout = () => {
      logoutUser()
      this.setState({
        user: null,
        isLoggedIn: false,
        id: null,
        name: null
      })
    }


  render() {

    const AuthLoginForm = Authorize(LoginForm)
    const ProfileContainer = Authorize(ProfilePage)

    return (
      <div className="App">
        <Header handleLogout={this.logout} name={this.state.name} />

          <Route exact path='/' render={(props) => <Homepage />} />
          <Route exact path="/profile" render={(props) => <ProfileContainer currentUser={this.state.id} {...props} />}/>
          <Route exact path="/login" render={(props)=><AuthLoginForm onLogin={this.login} {...props} />}/>
          <Route exact path="/signup" render={(props)=><Signup {...props} />}/>

          {/*<Footer /> */}
      </div>
    );
  }
}

export default App;
