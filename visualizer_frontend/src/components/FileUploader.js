import Dropzone from 'react-dropzone'
import React from 'react'


class FileUploader extends React.Component {

  constructor() {
    super()
    this.state = {
      category: '',
      text: '',
      title: ''
    }

    this.createNote = this.createNote.bind(this)
  }

  onDrop = (files) => {
    var f = files[0];
    if (f) {
      var r = new FileReader();
      r.readAsText(f);
      r.onload = function(e) {
	      var contents = e.target.result;
        console.log(contents)
        this.setState({
          text: contents
        })
      }.bind(this)
    }
  }

  setTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  setCategory = (event) => {
    this.setState({
      category: event.target.value
    })
  }


  createNote(){
    const note = this.state
    const id = this.props.userId
    const category = this.state.category
    const body = JSON.stringify({note: note, user: id, category: category })
    return fetch("http://localhost:3000/api/v1/notes/create", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
      .then((res) => res.json())
  }



  render() {
    console.log(this.state)
    return (
      <div className="ui raised padded text container segment">
          <div className="ui centered grid ">
            <Dropzone onDrop={this.onDrop}>
              <p>Try dropping a file here, or click to select files to upload.</p>
            </Dropzone>
          </div>

          <select class="ui search dropdown" onChange={this.setCategory}>
            <option value="">Category</option>
            <option value="History">History</option>
            <option value="Science">Science</option>
            <option value="Math">Math</option>
            <option value="Law">Law</option>
            <option value="Art">Art</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Finance">Finance</option>
            <option value="Accounting">Accounting</option>
            <option value="Music">Music</option>
            <option value="Engineering">Engineering</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
          
          <div class="ui input">
          <input type='text' placeholder='Enter your notes name' onChange={this.setTitle} />
          </div>
          <button className="ui blue button" onClick={this.createNote}> Submit Note </button>
      </div>
    );
  }
}

export default FileUploader
