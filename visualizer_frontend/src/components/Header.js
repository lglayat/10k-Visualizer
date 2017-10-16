import React from 'react'
import { NavLink } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { signOut } from '../actions/user'
import { connect } from 'react-redux'

class Header extends React.Component{

  //localStorage.getItem('jwtToken') ? <div className="item" onClick={this.logout}> Log Out </div> :<div><div className="item"><NavLink to="/login">Login</NavLink></div><div className="item"><NavLink to="/signup">Sign up</NavLink></div></div> }

  showLogout = () => {
    return <div className="item" onClick={this.logout}><NavLink to="/">Log Out</NavLink></div>
  }
  showLogin = () => {
      return <div className="item"><NavLink to="/login">Login</NavLink></div>
  }
  showSignup = () => {
      return <div className="item"><NavLink to="/signup">Sign up</NavLink></div>
  }

  showProfile = () => {
    return <div className="item"><NavLink to="/profile">Profile</NavLink></div>
  }

  logout = (props) => {
    this.props.signOut(this.props)
  }

  poop = (props) => {
    if(this.props.isLoggedIn === false){
      return <div> NOT LOGGED IN</div>
    } else {
      return <div> LOGGED IN</div>
    }
  }

  render(){
      console.log(this.props.isLoggedIn)
    return(<div className="ui menu">
        <a className="header item">
          <NavLink to="/">Home</NavLink>
        </a>
        <a className="item">
          <NavLink to="/categories">Categories</NavLink>
        </a>

        {this.showProfile()}


        <div className='item'>
        {this.poop()}
        </div>


        <div className='right menu'>

        {this.showLogout()}

        {this.showLogin()}

        {this.showSignup()}


        </div>
      </div>)
  }
}



function mapDispatchToProps(dispatch){
  return {
    signOut: (props) => {
      dispatch(signOut(props))
    }
  }
}

export default connect(null, mapDispatchToProps)(Header)
