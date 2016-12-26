import React from 'react'
import { Route, IndexRoute } from 'react-router';

import Home from './components/Home/';
import App from './containers/App';
import List from './components/List/';


export const routes = (
	<Route path='/' component={List}>
		<IndexRoute component={Home} />
		<Route path='home' component={Home}  />
		<Route path='students' component={App} onEnter={App.onEnter} />
	</Route>
)