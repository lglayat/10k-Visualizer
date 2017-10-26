import React, { Component } from 'react';
import {  Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Authorize from './HOC/Authorize'
import Signup from './components/Signup'
import LoginForm from './components/LoginForm'
import 'semantic-ui-css/semantic.min.css'
import ProfilePage from './components/ProfilePage'
import Homepage from './components/Homepage'
import './App.css';
import CategoryContainer from './components/CategoryContainer'
import NoteShowPage from './components/NoteShowPage'
import CategoryPage from './components/CategoryPage'
import SearchResults from './components/SearchResults'


class App extends Component {


  render() {
    const isLoggedIn = this.props.store.getState().isLoggedIn
    const AuthLoginForm = Authorize(LoginForm)
    const ProfileContainer = Authorize(ProfilePage)

    return (
      <div className="App" >
        <Header id="header" isLoggedIn={isLoggedIn} />
        <div id='Site-content' >
          <div id='non-homepage' >
            <Route exact path="/profile" render={(props) => <ProfileContainer {...props} />}/>
            <Route exact path='/notes/:id' render={(props) => <NoteShowPage  {...props} /> } />
            <Route exact path='/categories/:id' render={(props) => <CategoryPage {...props} />} />
            <Route exact path='/categories' render={(props) => <CategoryContainer {...props} /> } />
            <Route exact path='/searchResults' render={(props) => <SearchResults {...props} /> }/>
          </div>
          <div id='login-signup'>
            <Route exact path="/login" render={(props)=><AuthLoginForm onLogin={this.login} {...props} />}/>
            <Route exact path="/signup" render={(props)=><Signup {...props} />}/>
          </div>
          <Route exact path='/' render={(props) => <Homepage {...props} />} />
        </div>
        <Footer id='footer'/>
      </div>
    );
  }
}


export default App
