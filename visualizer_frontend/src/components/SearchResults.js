import React from 'react'
import NoteCard from './NoteCard'


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
    console.log(this.state.notes)

    let notes = null

    if( this.state.notes ){
      notes = this.state.notes.map( note =><div class="five wide column"><NoteCard id={note.id} title={note.title} body={note.doc} /></div> )
    }

    return(
      <div class="ui container">
        <h1>SearchResults </h1>
        <div className="ui grid">
          {notes}
        </div>
      </div>)
  }
}

export default SearchResults
