import React, { Component } from 'react';
import Header from './components/Header/Header';
import Container from './components/Container';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
