import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import AppHelmet from './components/AppHelmet';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import GoalList from './components/GoalList';
import ItemModal from './components/ItemModal';
import Calendar from './components/calendar/Calendar.js';
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
				<AppHelmet />
				<div className="App">
					<AppNavbar />
					<Container style={{ marginTop: '2rem'}}>
						<Row>
							<Col>
								<Calendar />
							</Col>
							<Col>
								<ItemModal />
								<GoalList />
							</Col>
						</Row>
					</Container>
					<AppFooter />
				</div>
			</Provider>
		);
	}
}

export default App;
