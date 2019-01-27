import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ConsumerTable from './ConsumerTable';

export default class Consumers extends Component {
    state = {}

    render() {
        const { classes, realm } = this.props

        return (
            <div>
                <div className={classes.appBarSpacer} />
                <Typography variant="h4" gutterBottom component="h2">
                    Consumers
                </Typography>
                <ConsumerTable realm={realm}/>
            </div>
        )
    }
}