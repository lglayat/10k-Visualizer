import Dropzone from 'react-dropzone'
import React from 'react'


class FileUploader extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop = (files) => {
    console.log(files[0])
    var f = files[0];

    if (f) {
      var r = new FileReader();

      r.readAsText(f);

      r.onload = function(e) {
	      var contents = e.target.result;
        console.log(contents)
      }
    }

  }





  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}><a href={f.preview}>FAX </a> - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}

export default FileUploader
