import React from 'react';
import $ from 'jquery';

export default class NavBar extends React.Component {

  closeMenu = () => {
    $("#menu-close").click();
  }

  render() {
    return (
      <div>
      <a id="menu-toggle" href="#" className="btn btn-dark btn-lg toggle btn_blue"><i className="fa fa-bars fa-lg" /></a>
      <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
              <a id="menu-close" href="#" className="btn btn-light btn-lg pull-right toggle btn_blue"><i className="fa fa-times" /></a>
              <li className="sidebar-brand">
                  <a href="#top" onClick={this.closeMenu}>Christine</a>
              </li>
              <li>
                  <a href="#top" onClick={this.closeMenu}>Home</a>
              </li>
              <li>
                  <a href="#about" onClick={this.closeMenu}>About</a>
              </li>
              <li>
                  <a href="#portfolio" onClick={this.closeMenu}>Portfolio</a>
              </li>
              <li>
                  <a href="#services" onClick={this.closeMenu}>Tools & Skills</a>
              </li>

              <li>
                  <a href="#contact" onClick={this.closeMenu}>Contact</a>
              </li>
          </ul>
      </nav >
      </div >
    );
  }

}
