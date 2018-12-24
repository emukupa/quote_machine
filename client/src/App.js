import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    quotes: [],
    quote: '',
    author: '',
  };
  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:8080/quotes');
      console.log(response);
      if (response.status === 200) {
        const quotes = await response.data;
        this.setState({
          quotes,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  generateQuote = () => {
    const index = Math.floor(Math.random() * this.state.quotes.length);
    const item = this.state.quotes[index];

    this.setState({
      quote: item.quote,
      author: item.author,
    });
  };
  renderQuote = () => {
    if (this.state.quote) {
      return (
        <div>
          <div>"{this.state.quote}"</div>
          <div>by {this.state.author}</div>
        </div>
      );
    } else {
      return 'Click button to generate';
    }
  };
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column ">
          <div className="d-flex mb-2">{this.renderQuote()}</div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.generateQuote}
          >
            generate new quote
          </button>
        </div>
      </div>
    );
  }
}

export default App;
