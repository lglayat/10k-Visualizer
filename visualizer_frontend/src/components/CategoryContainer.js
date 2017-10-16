import React from 'react'
import CategoryCard from './CategoryCard'


class CategoryContainer extends React.Component{

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
      categories = this.state.categories.map( category => <div className="five wide column"><CategoryCard key={category.id} id={category.id} name={category.name} /></div> )
    }

    return(
      <div>
        <div className="ui center aligned grid">
          {categories}
        </div>
    </div>
    )
  }
}

export default CategoryContainer
