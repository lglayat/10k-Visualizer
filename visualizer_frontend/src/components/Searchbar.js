import React from 'react'
import 'semantic-ui-css/semantic.min.css'


class SearchBar extends React.Component{

  constructor() {
    super()
    this.state ={
      input: ''
    }
    this.search = this.search.bind(this)
  }

  setInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  search(){
    const searchVal = this.state.input
    this.props.history.push({
        pathname: '/searchResults',
        state: { searchVal: searchVal }
    })
  }

  render(){
    console.log(this.state.input)
    return(
      <div >
        <form>
          <div className="ui icon input">
            <input type='text' onChange={this.setInput} placeholder='Enter Topic here...' />
            <i className="search link icon" onClick={this.search} type="submit"></i>
          </div>
        </form>
      </div>
	)}
}


export default SearchBar
