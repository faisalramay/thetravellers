import React from 'react';
import ReactDOM from 'react-dom';
import './semantic-dist/semantic.min.css';
import Itinerary from './Itinerary';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Itinerary />, document.getElementById('root'));
registerServiceWorker();
