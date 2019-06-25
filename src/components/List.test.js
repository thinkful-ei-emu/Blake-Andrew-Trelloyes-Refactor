import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List
    key='0'
    header="Test Header"
    cards={[]}
    />, div);

  ReactDOM.unmountComponentAtNode(div);    
});