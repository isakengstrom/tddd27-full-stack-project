import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';

import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import GoalList from './components/GoalList';
import ItemModal from './components/ItemModal';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}
	
	render(){
		return (
			<Provider store={store}>
				<div className="App">
					<AppNavbar />
					<Container style={{ marginTop: '2rem'}}>
						<ItemModal />
						<GoalList />
					</Container>
					<AppFooter />
				</div>
			</Provider>
		);
	}
}

export default App;
