import React from 'react'
import NoteCard from './NoteCard'
import FileUploader from './FileUploader'

class ProfilePage extends React.Component {

  state ={
    notes: [],
    curr: this.props.currentUser
  }

	componentDidMount() {
    const num = this.props.currentUser
    const url = "http://localhost:3000/api/v1/users/"
    console.log(num)
  	fetch(url + num)
  	.then(resp => resp.json())
    .then(resp => {
      this.setState({
        notes: resp.notes
      }
    )})
	}



	render() {
    console.log(this.state.notes)

    let notes = null

    if( this.state.notes ){
      notes = this.state.notes.map( note => <NoteCard id={note.id} title={note.title} body={note.doc} /> )
    }

		return (
			<div>

        <h1>Welcome to your user page </h1>

          <FileUploader currentUser={this.props.currentUser} />
        <br/>

          {notes}

			</div>
		)
	}
}

export default ProfilePage
