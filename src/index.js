import React from 'react';
import ReactDOM from 'react-dom';
import './theme/css/bootstrap.css';
import './theme/css/font-awesome.css';
import './theme/css/replacer.css';
import './theme/css/site-style.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
