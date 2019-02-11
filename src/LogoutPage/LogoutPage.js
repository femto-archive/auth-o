import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

class LogoutPage extends Component {
    constructor(props) {
        super(props)

        const { dispatch } = this.props

        dispatch(userActions.logout())
    }

    render() {
        return (
            <p>Logging out...</p>
        )
    }
}

function mapStateToProps(state) {
    console.log('logout state', state)
    return {}
}

const connectedLogoutPage = connect(mapStateToProps)(LogoutPage)
export { connectedLogoutPage as LogoutPage }