import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/authActions';

export class SignOut extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="#">
                    Sign out
                </NavLink>
            </Fragment>
        )

    }
}

export default connect(null, { logout })(SignOut);