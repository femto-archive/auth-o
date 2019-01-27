import React, { Component } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'daysjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

dayjs.extend(relativeTime)

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    }
})

class ConsumerTable extends Component {
    state = {
        consumers: []
    }

    async componentDidMount() {
        const { realm } = this.props

        const consumers = await fetch(`/api/v1/realm/${realm.name.slug}/consumers`)
            .then(res => res.json())

        this.setState({ consumers })
    }
    
    render() {
        const { classes } = this.props
        const { consumers } = this.state

        return (
            <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Consumer Name</TableCell>
                  <TableCell>Slug</TableCell>
                  <TableCell>RedirectURI</TableCell>
                  <TableCell>Created At</TableCell>
                  <TableCell>Last Updated</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {consumers.map(consumer => (
                  <TableRow key={consumer._id}>
                    <TableCell component="th" scope="row">
                      {consumer.display}
                    </TableCell>
                    <TableCell>{consumer.name.slug}</TableCell>
                    <TableCell>{consumer.redirectURI}</TableCell>
                    <TableCell>{dayjs(consumer.createdAt).fromNow()}</TableCell>
                    <TableCell>{dayjs(consumer.updatedAt).fromNow()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )
    }
}

ConsumerTable.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ConsumerTable)