import React from 'react'
import NoteCard from './NoteCard'
import { Container } from 'semantic-ui-react'


class SearchResults extends React.Component{

  state ={
    searchVal: this.props.location.state.searchVal,
    notes: []
  }

  componentDidMount(){
    const val = this.state.searchVal

    const body = JSON.stringify({value: val })
    fetch("http://localhost:3000/api/v1/notes/search", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
      .then( (res) => res.json() )
      .then((res) => this.setState({
        notes: res
      }))
  }





  render(){

    let notes = null

    if( this.state.notes.length > 1 ){
      notes = this.state.notes.map( note =><div class="five wide column"><NoteCard id={note.id} title={note.title} body={note.doc} /></div> )
    } else  {
      console.log("NAH NIGA U GOOD")
      notes = <div className='ui raised very padded text container segment'> No results found. Please refine your search</div>
    }

    return(
      <div class="ui container">
        <Container textAlign='center'>

          <h1>SearchResults </h1>

          <div className="ui center aligned grid">
            {notes}
          </div>

        </Container>
      </div>)
  }
}

export default SearchResults
