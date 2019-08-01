import React from 'react';
import ReactDOM from 'react-dom';
import PatternComponent from './modules/layout/pattern/pattern-component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PatternComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
