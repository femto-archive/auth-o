import React, { Component } from 'react';
import { Redirect } from 'react-router'

export default class RealmRedirect extends Component {
    state = {}

    async componentDidMount() {
        // Either get the last seen realm by this user or the default one.
        const realm = 'default'

        this.setState({ realm })
    }

    render() {
        const { realm } = this.state

        if (realm) return <Redirect to={`/admin/${realm}`} />

        // We don't have a realm yet!  We should wait for a bit.
        return null
    }
}