import React from 'react'
import CategoryCard from './CategoryCard'


class NotesContainer extends React.Component{

  state = {
    categories: []
  }

  componentDidMount(){
    return fetch("http://localhost:3000/api/v1/categories")
      .then((res) => res.json())
      .then((res) => this.setState({
        categories: res
      }))
  }

  render(){

    let categories = null

    if( this.state.categories.length > 0 ){
      categories = this.state.categories.map( category => <CategoryCard id={category.id} body={category.doc} /> )
    }
    console.log(this.state.categories)
    return(

      <div>
        <h1> All Categories </h1>
        {categories}
      </div>)
  }
}

export default NotesContainer
