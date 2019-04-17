import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/menu/Menu';




class App extends Component {
  render() {
    return (

      <div>
      <header>
        <Header></Header>
        <Menu></Menu>
      </header>
      </div>
    
    );
  }
}

export default App;
