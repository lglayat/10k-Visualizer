import React from 'react'
import 'semantic-ui-css/semantic.min.css'


class CategoryCard extends React.Component{


  render(){
    const link = '/categories/' + this.props.id

    return(
    <div className="ui raised card">
      <div className="content">
        <div className="header">
          {this.props.name}
        </div>
        <div className="description">
          <a href={link}>See Notes</a>
        </div>
      </div>
    </div>
	)}
}


export default CategoryCard
