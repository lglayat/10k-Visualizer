import React from 'react'
import Downloader from './Downloader'
import { connect } from 'react-redux'


class NoteShowPage extends React.Component{

  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
      count: 0,
      users: []
    }
    this.buyNote = this.buyNote.bind(this)
  }

  componentDidMount(){
    const noteId = this.props.location.pathname.split('/').pop()
    const url = "http://localhost:3000/api/v1/notes/"
     fetch(url + noteId)
      .then(resp => resp.json())
      .then(resp => this.setState({
        title: resp.title,
        body: resp.doc,
        count: resp.count,
        users: resp.users
      }))
  }

  buyNote(){
    const note_Id = this.props.location.pathname.split('/').pop()
    const user_Id = this.props.currentUserId
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

  own = () => {
    let owners = this.state.users
    for(let i in owners ){
      if(owners[i].id === this.props.currentUserId){
        return true
      }
    }
    return false
  }

  isLoggedIn = () => {
    if(this.props.currentUserId){
      return true
    } else {
      return false
    }
  }

  render(){
    return(
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">{this.state.title}</h2>
        <h4> Times purchased: {this.state.count} </h4>
          { (this.isLoggedIn() === true && this.own() === true) ? <p>{ this.state.body }</p> : <p>{this.state.body.substr(0, 250)} <b>... Purchase the note for full access!</b></p>  }
          { (this.isLoggedIn() === true && this.own() === false) ? <button onClick={this.buyNote} className="ui green button" >Buy Note </button>: null}
          { (this.isLoggedIn() === true && this.own() === true ) ? <Downloader content={this.state.body} title={this.state.title}/> : null }
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
      currentUserId: state.userInfo.id
  }
}

export default connect(mapStateToProps)(NoteShowPage)
