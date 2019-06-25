import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from '../js/store';

/**
 * App Component Smoke Test
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={STORE} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/**
 * 
 */
