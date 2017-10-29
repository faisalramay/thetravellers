import React from 'react';
import ReactDOM from 'react-dom';
import Itinerary from './Itinerary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Itinerary />, div);
});
