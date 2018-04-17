import React, { Component } from 'react';
import './App.css';

class App extends Component {

        constructor(props) {
            super(props);
            this.state = {
              url: 'https://talaikis.com/api/quotes/random/',
                 quote: '',
                 author: '',
            }
             this.handleClick = this.handleClick.bind(this);
             this.handleTweetClick = this.handleTweetClick.bind(this);
          }

          componentDidMount () {
            fetch(this.state.url).then(function(res) {
              return res.json();
            })
            .then(function(data) {
              this.setState ({
                quote: data.quote,
                author: data.author,
              });
            }.bind(this));
          }

          handleClick () {
            fetch(this.state.url).then(function(res) {
              return res.json();
            })
            .then(function(data) {
              this.setState ({
                quote: data.quote,
                author: data.author,
              });
            }.bind(this));
          }

          handleTweetClick () {
            window.open(`https://twitter.com/intent/tweet? text="${this.state.quote}" - ${this.state.author}`);
          }

  render() {
    return (
      <div className="App ">
             <div className="container ">
          <div className="row ">
          <div className="card col-md-12 ">
          <h3>{this.state.quote}</h3>
           <p><i>{this.state.author}</i></p>
          </div>
          
          <div className="mb-5 mx-auto d-block btn-group col-md-12" role="group">
                <button  onClick={this.handleClick} className="btn btn-primary" >New Quote</button>
                <button onClick={this.handleTweetClick} className="btn btn-secondary" ><i className="fa fa-twitter" aria-hidden="true"></i>Share  Tweet</button>
              </div>
               
              </div>
          </div>
      </div>
    );
  }
}

export default App;
