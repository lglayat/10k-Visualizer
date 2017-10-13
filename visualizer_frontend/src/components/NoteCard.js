import React from 'react'
import 'semantic-ui-css/semantic.min.css'


class NoteCard extends React.Component{

  render(){
    return(<div className="ui raised card">
    <div className="content">
      <div className="header">{this.props.title}</div>
        <div className="description">
          <p>{this.props.body}</p>
        </div>
      </div>
    </div>
	)}
}


export default NoteCard
