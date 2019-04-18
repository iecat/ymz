import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/menu/Menu';
import Carousel from './components/carousel/Carousel'




class App extends Component {
  render() {
    return (

      <div>
      <header>
        <Header></Header>
        <Menu></Menu>
        <Carousel></Carousel>
      </header>
      </div>
    
    );
  }
}

export default App;
