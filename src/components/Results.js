  
import React from 'react';


class Results extends React.Component {

  render() {
    if (this.props.results === null) {
      return (
        <p className='noResult'>Sorry, No Results Found.</p>
      )
    } else {
      return (
        <ul>
          {this.props.results.map((person, i) => {
            return <li key={i}>{person.name} {person.height} inches {person.mass} {person.hair_color} {person.skin_color}</li>
          })}
        </ul>
      )
    }
  }
}
console.log(`results js working`)

export default Results;