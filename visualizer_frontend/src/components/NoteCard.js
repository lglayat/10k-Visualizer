import React from 'react'
import 'semantic-ui-css/semantic.min.css'


class NoteCard extends React.Component{


  render(){
    const link = '/notes/' + this.props.id
    let preview = ''
    let titlePreview = ''

    if(this.props.body.length > 40){
      preview = this.props.body.slice(0, 25) + "..."
    } else {
      preview = this.props.body
    }

    if(this.props.title.length > 17){
      titlePreview = this.props.title.slice(0, 15) + "..."
    } else {
      titlePreview = this.props.title
    }



    return(<div className="ui raised card">
    <div className="content">
      <a href={link}> View Note</a>
      <div className="header">{titlePreview}</div>
        <div className="description">
          <p>{preview}</p>
        </div>
      </div>
    </div>
	)}
}


export default NoteCard
