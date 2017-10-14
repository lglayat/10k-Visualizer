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
import NotesContainer from './components/NotesContainer'
import CategoryContainer from './components/CategoryContainer'
import NoteShowPage from './components/NoteShowPage'
import Background from './resources/img/background.png';


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

    const style = {
      width: "100%",
      height: "400px",
      'background-repeat': 'no-repeat',
      backgroundImage: `url(${Background})`,
      'background-size': 'cover'
    };

    return (
      <div className="App">
        <Header handleLogout={this.logout} name={this.state.name} />
        <div style={style}>
          <Route exact path='/' render={(props) => <Homepage />} />
          <Route exact path="/profile" render={(props) => <ProfileContainer currentUser={this.state.id} {...props} />}/>
          <Route exact path="/login" render={(props)=><AuthLoginForm onLogin={this.login} {...props} />}/>
          <Route exact path="/signup" render={(props)=><Signup {...props} />}/>
          <Route exact path='/notes/:id' render={(props) => <NoteShowPage noteId={NoteShowPage.id} {...props} /> } />
          <Route exact path='/notes' render={(props) => <NotesContainer {...props} /> } />
          <Route exact path='/categories' render={(props) => <CategoryContainer {...props} /> } />

        </div>
          {/*<Footer /> */}
      </div>
    );
  }
}

export default App;
