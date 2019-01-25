import React, { Component } from 'react';

export default class RealmSelect extends Component {
    state = {
        realms: []
    }

    async componentDidMount() {
        const realms = [] /* get realms */

        this.setState({ realms })
    }

    render() {
        const { realms } = this.state

        if (realms) return (<p>realms</p>)

        // We don't have a list of realms yet!  We should wait for a bit.
        return (<p>nothing</p>)
    }
}