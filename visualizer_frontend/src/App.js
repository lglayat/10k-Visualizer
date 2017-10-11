import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import DailyData from './components/DailyData'
import { loginUser, logoutUser } from './services/user'
import Authorize from './components/Authorize'
import Signup from './components/Signup'
import LoginForm from './components/LoginForm'
import 'semantic-ui-css/semantic.min.css'


import './App.css';

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
            name: resp.user.username
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

    return (
      <div className="App">
        <Header handleLogout={this.logout} name={this.state.name} />

          <Route exact path="/login" render={(props)=><AuthLoginForm onLogin={this.login} {...props} />}/>
          <Route exact path="/signup" render={(props)=><Signup />}/>

        <Footer />
      </div>
    );
  }
}

export default App;
