import React from 'react'
import 'semantic-ui-css/semantic.min.css'


class NoteCard extends React.Component{


  render(){
    const link = '/notes/' + this.props.id
    let preview = ''

    if(this.props.body.length > 40){
      preview = this.props.body.slice(0, 37) + "..."
    }

    return(<div className="ui raised card">
    <div className="content">
      <a href={link}> Link to Note</a>
      <div className="header">{this.props.title}</div>
        <div className="description">
          <p>{preview}</p>
        </div>
      </div>
    </div>
	)}
}


export default NoteCard
