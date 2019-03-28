import React from 'react';
import ReactDOM from 'react-dom';
import SplitPane from 'react-split-pane';
import './index.css';
import Background from './Background.js';
import MainContent from './MainContent';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <SplitPane split = "vertical" defaultSize="65%">
      <MainContent />
      <Background />
  </SplitPane>, document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
