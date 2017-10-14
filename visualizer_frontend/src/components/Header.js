import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'


const Header = (props) => {

  const logout = <div className="ui primary button" onClick={props.handleLogout}>Sign Out</div>
  const logsign = <div><NavLink className="ui primary button" to="/login">Login</NavLink> <NavLink className="ui primary button" to="/signup">Sign up</NavLink></div>
  const profileLink = <div className="item">{props.name ? <NavLink to="/profile">Profile</NavLink> : null }</div>
  const greeting =   <div className="right menu"><div> You are logged in {props.name}</div></div>


  const logButtons = () => {
    if (localStorage.getItem('jwtToken')) {
      return logout
    } else {
      return (
        logsign
      )
    }
  }

  const greetingNotification = () => {
    if (localStorage.getItem('jwtToken')) {
      return greeting
    } else {
      return (
        null
      )
    }
  }

  return(
    <div className="ui tiny menu">
      <a className="active item">
        <NavLink to="/">Home</NavLink>
      </a>

      <a className="active item">
        <NavLink to="/notes">Notes</NavLink>
      </a>

      {props.name ? profileLink : null }


      {greetingNotification()}

  		<div className="right menu">
      	{logButtons()}
      </div>

  	</div>

  )

}

export default Header
