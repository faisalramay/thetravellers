import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import routes from './routes';
import './semantic-dist/semantic.min.css';

import Home from './components/views/home';
import SearchResults from './components/views/search-results';
import Itinerary from './components/views/itinerary';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><div>
    <Route exact path='/' component={Home} />
    <Route path='/SearchResults' component={SearchResults} />
    <Route path='/Itinerary' component={Itinerary} />
    </div></Router>, document.getElementById('root'));
registerServiceWorker();
