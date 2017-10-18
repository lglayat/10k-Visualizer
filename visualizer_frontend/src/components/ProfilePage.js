import React from 'react'
import NoteCard from './NoteCard'
import FileUploader from './FileUploader'
import { connect } from 'react-redux'


class ProfilePage extends React.Component {

  state ={
    notes: [],
    curr: this.props.currentUser
  }

	componentDidMount(){
    const num = this.props.userId

    const url = "http://localhost:3000/api/v1/users/"
    console.log(this.props)
  	fetch(url + num)
  	.then(resp => resp.json())
    .then(resp => {
      this.setState({
        notes: resp.notes
      }
    )})
	}

	render() {

    let notes = null

    if( this.state.notes ){
      notes = this.state.notes.map( note =><div className="five wide column"><NoteCard id={note.id} title={note.title} body={note.doc} /></div> )
    }

		return (
			<div>

        <h1>Welcome {this.props.username}! </h1>

          <FileUploader {...this.props} userId={this.props.userId} />
        <br/>

        <h3>Your Notes</h3>
        <div className="ui center aligned grid">
          {notes}
        </div>
			</div>
		)
	}
}

function mapStateToProps(state){
  return{
    user: state.userInfo
  }
}

export default connect(mapStateToProps)(ProfilePage)
