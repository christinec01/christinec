import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';


ReactDOM.render(<App />, document.getElementById('react'));

if (module.hot) {
  module.hot.accept();
}
