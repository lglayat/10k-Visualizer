import React from 'react'
import NoteCard from './NoteCard'


class NotesContainer extends React.Component{

  state={
    notes: []
  }

  componentDidMount(){
    return fetch("http://localhost:3000/api/v1/notes")
      .then((res) => res.json())
      .then((res) => this.setState({
        notes: res
      }))
  }

  render(){

     let notes = null

    if( this.state.notes ){
      notes = this.state.notes.map( note => <NoteCard id={note.id} title={note.title} body={note.doc} /> )
    }

    console.log(this.state.notes)

    return(
      <div>
        <h1> All Notes </h1>
        {notes}
      </div>)
  }
}

export default NotesContainer
