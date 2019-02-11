import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    constructor(props) {
        super(props)

        console.log('home page props', props)
    }

    componentDidUpdate() {
        console.log('update login page', this.props)
    }

    render() {
        const { user } = this.props

        return (
            <div>
                <p>Hello, world!</p>
                {
                    user.logged_in ? (
                        <div>
                            <Link to='/logout'>Logout</Link>
                        </div>
                    ) : (
                        <div>
                            <Link to='/login'>Login</Link>
                            <br />
                            <Link to='/register'>Register</Link>
                        </div>
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('home page state', state)
    return {
        user: state.user
    }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)
export { connectedHomePage as HomePage }