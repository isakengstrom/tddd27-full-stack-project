import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class AppHelmet extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }
	
	render() {
		const { _ , user } = this.props.auth;

		return (
            <Helmet>
                <title>{user ? `${user.name} | Coalendar` : 'Coalendar' }</title>
            </Helmet>	
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, null)(AppHelmet);