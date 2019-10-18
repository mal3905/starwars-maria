import React, { Component } from 'react'
// import {BrowserRouter as Router, Route } from 'react-router-dom';
import Starwars from './components/Starwars';
import Header from './components/Header';
import Results from './components/Results';

export class App extends Component {
  constructor(props){
    super(props);  
      this.state = {
      results: [],
      error: null,
      // loading: false
    }
  }


  handleSubmit = (name) => {
    const ApiUrl = `https://www.swapi.co/api/people?search=${name}`
    console.log(ApiUrl)
    fetch(ApiUrl)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(resData => {
      if (resData.count === 0) {
        this.setState({
          results:null,
          searchMade:true,
        })
      }
      else {
        this.setState({ searchMade: true, results:resData.results.map(result => {
          return {name: result.name}
        })
      })}
      })
    .catch(err => this.setState({error: err.message}))
  }

  render() {
    return (
      <div>
        <Header/>
          <div className="App">
            <div className="container">
              <Starwars handleSubmit={this.handleSubmit}/>
            </div>
            <div className="results">
              <Results results={this.state.results} />
            </div>
          </div>
      </div>
    )
  }
}

export default App
