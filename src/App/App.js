import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { PrivateRoute } from '../_components'
import { history } from '../_helpers'

import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { LogoutPage } from '../LogoutPage'
import { RegisterPage } from '../RegisterPage'

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/logout' component={LogoutPage} />
                    <PrivateRoute path='/' component={HomePage} />
                </Switch>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    console.log('app state', state)
    return {}
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App }