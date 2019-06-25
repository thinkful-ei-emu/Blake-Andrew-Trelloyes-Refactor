import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from '../js/store';
import renderer from 'react-test-renderer';

/**
 * App Component Smoke Test
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={STORE} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/**
 * App Component Snapshot Test
 */

it ('renders this UI as expected', () => {
  const app = renderer.create(<App store={STORE}/>).toJSON();
  expect(app).toMatchSnapshot();
})
