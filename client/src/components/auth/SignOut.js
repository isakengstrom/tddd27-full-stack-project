import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
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
                <Button onClick={this.props.logout} variant="outline-light" href="#">
                    Sign out
                </Button>
            </Fragment>
        )

    }
}

export default connect(null, { logout })(SignOut);