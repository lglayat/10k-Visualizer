import React from 'react'
import Logo from '../resources/img/logo.png'
import Searchbar from './Searchbar'
import { Redirect } from 'react-router-dom'


class Homepage extends React.Component{

  render(){
    const logoStyle= {
      width: '300px',
      height: '150px'
    }


    return(<div>
            <div className="ui raised padded text container segment">

              <img src={Logo} alt="/" style={logoStyle} />

              <Searchbar {...this.props} />

            </div>
          </div>
        )
  }
}

export default Homepage
