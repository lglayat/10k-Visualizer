import React from 'react'
import Logo from '../resources/img/logo.png'
import Searchbar from './Searchbar'



class Homepage extends React.Component{

  render(){
    const logoStyle= {
      width: '300px',
      height: '150px'
    }


    return(
            <div className="ui raised padded text container segment">

              <img src={Logo} alt="/" style={logoStyle} />

              <div className="ui inverted divider"></div>


              <Searchbar {...this.props} />

            </div>

        )
  }
}

export default Homepage
