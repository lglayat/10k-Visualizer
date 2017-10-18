import React from 'react'
import Downloader from './Downloader'


class NoteShowPage extends React.Component{

  constructor() {
    super()
    this.state = {
      note: '',
      users: [],
      button: 'green'
    }
    this.buyNote = this.buyNote.bind(this)
  }


  componentDidMount(){
    const noteId = this.props.location.pathname.split('/').pop()
    let me = this.props.store.getState().userInfo.id
    const url = "http://localhost:3000/api/v1/notes/"
     fetch(url + noteId)
      .then(resp => resp.json())
      .then(resp => this.setState({
        note: resp,
        me: me
      }))

  }

  buyNote(){
    const note_Id = this.props.location.pathname.split('/').pop()
    const user_Id = this.props.store.getState().userInfo.id
    const body = JSON.stringify({note: note_Id, user: user_Id })
    fetch("http://localhost:3000/api/v1/notes/buyNote", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(res => this.props.history.push('/profile') )

  }





  render(){

    let noteTitle = null
    let noteBody = null

    if( this.state.note !== ''){
        noteTitle = this.state.note.title
        noteBody = this.state.note.doc
    }

    let button = "ui " + this.state.button + " button"

    return(

      <div className="ui raised very padded text container segment">
        <h2 className="ui header">{noteTitle}</h2>
          <p>{noteBody}</p>
        <button onClick={this.buyNote} className={button}>
          Save Note
        </button>

        <div className="ui inverted divider"></div>


        <Downloader content={noteBody} title={noteTitle} />

      </div>

      )
  }
}

export default NoteShowPage
