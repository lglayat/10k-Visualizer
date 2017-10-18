import React from 'react'
import { NavLink } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { signOut } from '../actions/user'
import { connect } from 'react-redux'

class Header extends React.Component{

  showProfile = () => {
    return <div className="green item"><NavLink to="/profile">Profile</NavLink></div>
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
        <div className="ui inverted menu">

          <a className="olive item" href='/'>Home</a>

          <NavLink className="item" to="/categories">Categories</NavLink>

          {this.showProfile()}

          <div className='right menu'>

          { hasToken ?  <NavLink className="item" onClick={this.logout} to="/">Log Out</NavLink>: null }

          { hasToken ? null : <NavLink className="item" to="/login">Login</NavLink> }

          { hasToken ? null : <NavLink className="item" to="/signup">Sign up</NavLink> }

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
