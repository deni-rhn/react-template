import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PatternComponent from './modules/layout/pattern/pattern-component';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <PatternComponent />, 
    document.getElementById('root')
);

serviceWorker.unregister();
