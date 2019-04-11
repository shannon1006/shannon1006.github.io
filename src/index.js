import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Section from './Section'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Section />, document.getElementById('root')
)

serviceWorker.unregister();
