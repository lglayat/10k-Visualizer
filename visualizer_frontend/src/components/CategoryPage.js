import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import NoteCard from './NoteCard'

class CategoryPage extends React.Component{

  state = {
    notes: []
  }

  componentDidMount(){
    const categoryId = this.props.location.pathname.split('/').pop()
    console.log(categoryId)
    const url = "http://localhost:3000/api/v1/categories/"
    fetch(url + categoryId)
      .then(resp => resp.json())
      .then(resp => this.setState({
        notes: resp.notes
      }))

  }

  render(){
    let notes = null

    if( this.state.notes ){
      notes = this.state.notes.map( note => <NoteCard id={note.id} title={note.title} body={note.doc} /> )
    }

    return(
    <div className="ui container">
      <h1>Welcome to the category show page</h1>
      {notes}
    </div>
	)}
}


export default CategoryPage
