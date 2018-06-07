import React, { Component } from 'react';
import './App.css';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {

  constructor() {
    super();
    this.state = {
      elements: []
    }
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          const elements = [];
          for (let article in result.articles) {
            let card = result.articles[article]
            let element = <div key={article} className="card" style={{width:'18rem'}}>
              <img className="card-img-top" src={card.urlToImage} alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <a href={card.url} className="btn btn-primary">Read more</a>
              </div>
            </div>

            elements.push(element);
          }
          this.setState({
            elements
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert(error)
        }
      )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to NewsLy</h1>
        </header>
        <p className="App-intro">
        </p>
        <div className="cards">
          {this.state.elements}
        </div>
      </div>
    );
  }
}

export default App;
