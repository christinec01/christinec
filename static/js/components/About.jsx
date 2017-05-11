import React from 'react';


export default class About extends React.Component {
  render() {
    return (
      <section id="about" className="about">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center pf_blue">
                      <h2>I am a UI Designer and coffee lover in the Bay Area. </h2>
                      <p className="lead">I don't like to just to design something because it "feels right". I follow <strong>explanatory evaluation </strong> and <em>generative design practices</em> which enable me to make design decisions with power and depth. Asking questions and iterating on ideas in order to arrive at a clearer and better understanding of what the customer or user wants is how I operate. I believe perfection is best strived for in continual problem solving, critical thinking and analysis. <a target="_blank" href="mailto:christine.casebolt@gmail.com">Let me leverage my skills on your team</a>.</p>
                  </div>
              </div>
          </div>
      </section>

    );
  }
}
