import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './MainRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainRouter />, document.getElementById('root'));
registerServiceWorker();
