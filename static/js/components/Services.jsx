import React from 'react';

export default class Services extends React.Component {
  render() {
    return (
      <div>
        <section id="services" className="services bg-primary">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-10 col-lg-offset-1">
                        <h2>Ingredients</h2>
                        <hr className="small" style={{maxWidth: '100%'}}/>
                        <div className="row">
                            <div className="col-md-4 col-sm-8">
                                <div className="service-item">
                                    <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-cloud fa-stack-1x text-primary"></i>
                                </span>
                                    <h4>
                                        <strong>My Tools</strong>
                                    </h4>
                                    <p>Sketch</p>
                                    <p>InVision</p>
                                    <p>HTML/CSS</p>
                                    <p>Balsamiq</p>
                                    <p>Python</p>
                                    <p>Ruby</p>
                                    <p>React</p>
                                    <p>javascript</p>
                                    <p>Git/Github</p>
                                    <p>CraftManager</p>

                                </div>
                            </div>
                            <div className="col-md-4 col-sm-8">
                                <div className="service-item">
                                    <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-compass fa-stack-1x text-primary"></i>
                                </span>
                                    <h4>
                                        <strong>Skills</strong>
                                    </h4>
                                    <p>Web Application Design</p>
                                    <p>Responsive Sites</p>
                                    <p>Front End Development</p>
                                    <p>Wire Framing</p>
                                    <p>HTML/CSS Prototypes</p>
                                    <p>Mock Ups</p>
                                    <p>Former web developer & shipped projects to show for it</p>
                                    <p>Background as an analyst</p>
                                </div>

                            </div>
                            <div className="col-md-3 col-sm-8" style={{letterSpacing: '1px'}}>
                                <div className="service-item">
                                    <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-compass fa-stack-1x text-primary"></i>
                                </span>
                                    <h4>
                                        <strong>What I do</strong>
                                    </h4>
                                    <p>Balance quality and speed to meet deadlines</p>
                                    <p>Work iteratively to pixel-perfection </p>
                                    <p>I believe that there is no detail too small or project too big</p>
                                    <p>I've got real-world experience working cross-functionally</p>
                                    <p>I'm a humble and agile learner</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>

      </div >
    );
  }

}
