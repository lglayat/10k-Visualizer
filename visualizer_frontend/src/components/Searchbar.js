
import React from 'react'
import 'semantic-ui-css/semantic.min.css'


class SearchBar extends React.Component{


  render(){
    return(<div >
      <form>
        <div className="ui icon input">
          <input type='text' placeholder='Enter Topic here...' />
          <i className="search link icon" type="submit"></i>
        </div>
      </form>
    </div>
	)}
}


export default SearchBar
