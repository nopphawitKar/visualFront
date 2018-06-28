import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quiz from './Quiz';
import Footer from './Footer';

import FacebookLogin from 'react-facebook-login';

class Body extends Component {

  constructor(props) {
    super(props)
    this.state = {
      understanding: "",
      learning: ""
    }
  }

  componentWillMount(){
       fetch('/resource/understanding')
      .then(res => res.json())
      .then(understanding => this.setState({ understanding: JSON.stringify(understanding) }));

      fetch('/resource/learning')
      .then(res => res.json())
      .then(learning => this.setState({ learning: JSON.stringify(learning) }));
  }

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <div>
      <script type="text/javascript"> /*dummy placeholder for some modules that need a script tag present*/</script>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quiz</h1>
        </header>
        <Quiz understanding={this.state.understanding} learning={this.state.learning}></Quiz>
        <Footer></Footer>
      </div>
    );
  }
}

export default Body;
