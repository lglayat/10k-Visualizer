import React from 'react'
import Logo from '../resources/img/logo.png'
import Searchbar from './Searchbar'

class Homepage extends React.Component{

  render(){
    const logoStyle= {
      width: '300px',
      height: '150px'
    }


    return(<div  >
            <h1>Welcome!</h1>
            <img src={Logo} alt="/" style={logoStyle} />
            <Searchbar />
          </div>
        )
  }
}

export default Homepage
