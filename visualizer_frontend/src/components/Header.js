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
    this.forceUpdate()
  }

  loggedIn = (props) => {
    if(!!localStorage.getItem("jwtToken")){
      return <div> LOGGED IN</div>
    } else {
      return <div>NOT LOGGED IN</div>
    }
  }

  render(){

    const hasToken = !!localStorage.getItem("jwtToken")

    return(
        <div className="ui menu">
          <a className="header item">
            <NavLink to="/">Home</NavLink>
          </a>
          <a className="item">
            <NavLink to="/categories">Categories</NavLink>
          </a>

          {this.showProfile()}


          <div className='right menu'>

          { hasToken ?  <div className="item" onClick={this.logout}><NavLink to="/">Log Out</NavLink></div> : null }

          { hasToken ? null : <div className="item"><NavLink to="/login">Login</NavLink></div> }

          { hasToken ? null : <div className="item"><NavLink to="/signup">Sign up</NavLink></div> }

          {/*this.showLogout()*/}

          {/*this.showLogin()*/}

          {/*this.showSignup()*/}


          </div>
        </div>
    )
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
