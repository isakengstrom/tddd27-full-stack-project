import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render(){
		return (
			<div className="App">
				<AppNavbar />
				<AppFooter />
			</div>
		);
	}
}

export default App;
