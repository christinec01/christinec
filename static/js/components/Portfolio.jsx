import React from 'react';


export default class Portfolio extends React.Component {
  render(){
    return (
      <section id="portfolio" className="portfolio">
          <div className="container">
              <div className="row">
                  <div className="col-lg-10 col-lg-offset-1 text-center">
                      <h2 className="pf_blue">Some of my recent work</h2>
                      <hr className="small" style={{maxWidth:'100%'}} />
                      <div className="row">
                          <div className="col-md-6" style={{width:'100%'}}>
                              <div className="portfolio-item">
                                  <a href="https://invis.io/V2B5AORTG">
                                      <img className="img-portfolio img-responsive" src="./img/flightless-coffee..jpg" />
                                  </a>
                                <h4 style={{color:'#666'}}>Click image for demo</h4>
                              </div>
                          </div>
                          <div className="col-md-6" style={{width:'100%'}}>
                              <div className="portfolio-item">
                                  <a href="https://invis.io/58B5W1RMR">
                                      <img className="img-portfolio img-responsive" src="{{ url_for('static', filename='img/warehouse.jpg') }} " />
                                  </a>
                                  <h4 style={{color:'#666'}}>Click image for demo</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}
