import React from 'react'



class NoteShowPage extends React.Component{

  state = {
    note: ''
  }

  componentDidMount(){
    const noteId = this.props.location.pathname.split('/').pop()
    const url = "http://localhost:3000/api/v1/notes/"
    fetch(url + noteId)
      .then(resp => resp.json())
      .then(resp => this.setState({
        note: resp
      }))

  }



  render(){

    console.log(this.state.note)
    let noteTitle = null
    let noteBody = null

    if( this.state.note !== ''){
        noteTitle = this.state.note.title
        noteBody = this.state.note.doc
    }



    return(

      <div className="ui raised very padded text container segment">
        <h2 class="ui header">{noteTitle}</h2>
          <p>{noteBody}</p>
      </div>
    
      )
  }
}

export default NoteShowPage
