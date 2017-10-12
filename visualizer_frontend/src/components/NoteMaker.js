import React from 'react';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

class NoteMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.saveContent(contentState);
    this.setState({
      editorState,
    });
  }

  saveContent = (content) => {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }

  handleSubmit = (event) => {
    event.preventDefault


  }

  render() {
    // console.log(EditorState);
    // console.log(this.state.editorState._immutable);
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>

        <Editor editorState={this.state.editorState} onChange={this.onChange} />
        <input type="submit"/>
      </form>
    );
  }
}

export default NoteMaker;



{/*

import React from 'react'
import { RichUtils } from 'draft-js';
import { EditorState } from 'draft-js';

import Editor from 'draft-js-plugins-editor';


class NoteMaker extends React.Component{

  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onChange = (editorState) => {
    this.setState=({ editorState })
  }

  handleKeyCommand = (command) => {
  const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

  if (newState) {
    this.onChange(newState);
    return 'handled';
  }

  return 'not-handled';

  }


  render(){

    var style = {
      width: '480px',
      margin: '0 auto'
    };

    return(<div className='editor' style={style} >

      <button className='ui primary button' onClick={this.onUnderlineClick}>Underline</button>
      <button className='ui primary button' onClick={this.onToggleCode}>Code Block</button>

        <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
      />

      </div>)
  }
}

export default NoteMaker
 */}
