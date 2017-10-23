import React from 'react'
import NoteCard from './NoteCard'
import { Container } from 'semantic-ui-react'


class SearchResults extends React.Component{

  state ={
    searchVal: this.props.location.state.searchVal,
    notes: [],
    category: ''
  }

  setOrder = (event) => {
    if(event.target.value === "Most Popular"){
      let notes = this.state.notes.sort(function(a, b) {
        return b.count - a.count;
      });
      this.setState({
        notes: notes
      })
    } else if(event.target.value === "Least Popular"){
      let notes = this.state.notes.sort(function(a, b) {
        return a.count - b.count;
      });
      this.setState({
        notes: notes
      })
    }

  }

  componentDidMount(){
    const val = this.state.searchVal
    const body = JSON.stringify({value: val })
    fetch("http://localhost:3000/api/v1/notes/search", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
      .then( (res) => res.json() )
      .then((res) => this.setState({
        notes: res
      }))
  }

  render(){

    let notes = null
    let select = null
    const selectStyle = {'marginBottom':'4.5%'}

    if( this.state.notes.length > 1 ){
      notes = this.state.notes.map( note =><div class="five wide column"><NoteCard id={note.id} title={note.title} body={note.doc} /></div> )
      select = <select style={selectStyle} className="ui search dropdown" onChange={this.setOrder.bind(this)}><option value="">Order By</option><option value="Most Popular">Most Popular</option><option value="Least Popular">Least Popular</option></select>
    } else  {
      notes = <div className='ui raised very padded text container segment'> No results found. Please refine your search</div>
    }



    return(
      <div className="ui container">

        <Container textAlign='center'>
          <h1>SearchResults </h1>

          {select}

          <div className="ui center aligned grid">
            {notes}
          </div>

        </Container>

      </div>)
  }
}

export default SearchResults
