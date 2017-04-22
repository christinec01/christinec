import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
    <header id="top" className="header">
         <div className="container">
           <br />
         <div className="row text-center">

             <div className="type-wrap">
               <aside className="header-callout">
                     <div className="text_wrapper text-vertical-center" id="typed-strings">
                       <h1>I'm a data-driven artist who can code.</h1>
                       <h1>My name is Christine Casebolt.</h1>
                     </div>
                     <span id="typed" />
               </aside>
             <br />
               <a href="https://docs.google.com/document/d/1kHduKf4sbN4M7lC-WnFaKugbp7GAPQKanVZqkuF5h3c/edit?usp=sharing" className="btn btn-dark btn-lg btn_blue">Find Out More</a>
              </div>
         </div>
       </div>

    </header>
    );
  }
}
