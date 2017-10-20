import Dropzone from 'react-dropzone'
import React from 'react'
import { Progress } from 'semantic-ui-react'


class FileUploader extends React.Component {

  constructor() {
    super()
    this.state = {
      category: '',
      text: '',
      title: '',
      button: 'green',
      button_msg: 'Upload Note First',
      progress: 0
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
        this.updateProgress()
      }.bind(this)
    }
  }

  setTitle = (event) => {
    this.setState({
      title: event.target.value
    }, function (){
      this.updateProgress()
    })
  }

  setCategory = (event) => {
    this.setState({
      category: event.target.value
    }, function (){
      this.updateProgress()
    })
  }

  updateProgress = () => {
    this.setState({ progress: Math.round(this.calcProgress()) })
  }

  calcProgress = () =>{
    let num = 0

    this.state.category !== '' ? num += 33.3 : null
    this.state.text !== '' ? num += 33.3 : null
    this.state.title !== '' ? num += 33.3 : null

    if(num > 90){
      this.setState({
        button: 'yellow',
        button_msg: 'Submit Note'
      })
    }

    return num
  }




  createNote(){
    const note = this.state
    const id = this.props.userId
    if(note.category === '' || note.title === '' || note.text === '' || id < 1){
      alert('Please make sure the category and file have been selected and the title has been filled in before submitting!')
    } else {
      const category = this.state.category
      const body = JSON.stringify({note: note, user: id, category: category })
      fetch("http://localhost:3000/api/v1/notes/create", {
        method: 'post',
        body: body,
        headers: {
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
      })
        .then((res) => res.json())
        .then((res) => this.setState({
          category: '',
          text: '',
          title: ''
        }))
        .then((res) => this.props.history.push('/profile'))
    }

  }




  render() {
    console.log(this.state)
    let button = "ui " + this.state.button + " button"
    let button_msg = this.state.button_msg
    return (
      <div className="ui raised padded text container segment">
          <div className="ui grid ">

            <div className="eight wide column">
              <div className='ui center aligned container'>
                <Dropzone  onDrop={this.onDrop}>
                  <p>Try dropping a file here, or click to select a file to upload.</p><p> Only *.txt files will be accepted. </p>
                </Dropzone>
              </div>
            </div>

            <div className="eight wide column">

              <select className="ui search dropdown" onChange={this.setCategory}>
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


              <div className="ui inverted divider"></div>

              <div className="ui input">
                <input type='text' placeholder='Enter your notes name' onChange={this.setTitle} />
              </div>

              <div className="ui inverted divider"></div>

              <button className={button} onClick={this.createNote}> {button_msg}</button>

              <div className="ui inverted divider"></div>

              <Progress percent={this.state.progress} inverted progress success>

              </Progress>

            </div>

          </div>
      </div>
    );
  }
}

export default FileUploader
