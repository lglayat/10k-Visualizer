import React, { Component } from 'react';
import {  Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Authorize from './components/Authorize'
import Signup from './components/Signup'
import LoginForm from './components/LoginForm'
import 'semantic-ui-css/semantic.min.css'
import ProfilePage from './components/ProfilePage'
import Homepage from './components/Homepage'
import './App.css';
import CategoryContainer from './components/CategoryContainer'
import NoteShowPage from './components/NoteShowPage'
import Background from './resources/img/background.png';
import CategoryPage from './components/CategoryPage'
import SearchResults from './components/SearchResults'

class App extends Component {


  render() {
    const userId = this.props.store.getState().userInfo.id
    const username = this.props.store.getState().userInfo.username
    const isLoggedIn = this.props.store.getState().isLoggedIn
    const AuthLoginForm = Authorize(LoginForm)
    const ProfileContainer = Authorize(ProfilePage)

    const wrapperStyle = {
      backgroundImage: `url(${Background})`,
    };

    const style={
      marginBottom: '100px'
    }


    return (
      <div className="App" style={wrapperStyle}>


        <div className="content">
          <Header id="header" isLoggedIn={isLoggedIn} {...this.props} />

          <div id='content' style={style}  >
            <Route exact path="/profile" render={(props) => <ProfileContainer username={username} userId={userId} {...props} />}/>
            <Route exact path="/login" render={(props)=><AuthLoginForm onLogin={this.login} {...props} />}/>
            <Route exact path="/signup" render={(props)=><Signup {...props} />}/>
            <Route exact path='/notes/:id' render={(props) => <NoteShowPage noteId={NoteShowPage.id} {...props} /> } />
            <Route exact path='/categories/:id' render={(props) => <CategoryPage isLoggedIn={isLoggedIn}  {...props} />} />
            <Route exact path='/categories' render={(props) => <CategoryContainer {...props} /> } />
            <Route exact path='/searchResults' render={(props) => <SearchResults {...props} /> }/>
            <Route exact path='/' render={(props) => <Homepage {...props} />} />
          </div>
          <div className="push"></div>
        </div>

        <Footer id='footer'/>
      </div>
    );
  }
}


export default App
