import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Services from './Services';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <About />
        <Services />
      </div>
    );
  }
}
