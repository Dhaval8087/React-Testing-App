import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileInput from './FileInput';
import {Link} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ''
    }
    this.habdleChanges = this.habdleChanges.bind(this);

  }
  
  habdleChanges(event) {
    this.setState({ textValue: event.target.value });
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button value="next" >Next</button>
        <input type="text" value={this.state.textValue} onChange={this.habdleChanges} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        
        </p>
        <Link to='fileinout'>Click Me</Link>
        
      </div>
    );
  }
}

export default App;
