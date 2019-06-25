import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card
    key='0'
    title='Test Title'
    content='Test Content stufdisfjaoewijfeow'
    />, div);

  ReactDOM.unmountComponentAtNode(div);
})

it ('renders this UI as expected', () => {
  const app = renderer.create(<Card key='0' title='test title' content='test content'/>).toJSON();
  expect(app).toMatchSnapshot();
})

