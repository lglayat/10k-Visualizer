import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import NoteCard from './NoteCard'

class CategoryPage extends React.Component{

  state = {
    name: '',
    notes: []
  }

  componentDidMount(){
    const categoryId = this.props.location.pathname.split('/').pop()
    console.log(categoryId)
    const url = "http://localhost:3000/api/v1/categories/"
    fetch(url + categoryId)
      .then(resp =>  resp.json())
      .then(resp => this.setState({
        name: resp.name,
        notes: resp.notes
      }))
      .then(resp => console.log(resp))

  }

  render(){
    let notes = null

    if( this.state.notes ){
      notes = this.state.notes.map( note =><div key={note.id} className="five wide column"> <NoteCard key={note.id} id={note.id} title={note.title} body={note.doc} /></div> )
    }

    return(
      <div class="ui container">

        <h1>All {this.state.name} notes</h1>

        <div className="ui center aligned grid">
          {notes}
        </div>

    </div>
	)}
}


export default CategoryPage
