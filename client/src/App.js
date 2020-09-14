import React, { Component } from 'react';
import AppNavbarReactstrap from './components/AppNavbarReactstrap';
import AppNavbar from './components/AppNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render(){
		return (
			<div className="App">
				<AppNavbar />
			</div>
		);
	}
}

export default App;
