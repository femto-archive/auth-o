import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SimpleTable from './SimpleTable';
import SimpleLineChart from './SimpleLineChart';

export default class RealmSettings extends Component {
    render() {
        const { classes } = this.props

        return (
            <div>
                <div className={classes.appBarSpacer} />
                <Typography variant="h4" gutterBottom component="h2">
                    Orders
                </Typography>
                <Typography component="div" className={classes.chartContainer}>
                    <SimpleLineChart />
                </Typography>
                <Typography variant="h4" gutterBottom component="h2">
                    Products
                </Typography>
                <div className={classes.tableContainer}>
                    <SimpleTable />
                </div>
            </div>
        )
    }
}