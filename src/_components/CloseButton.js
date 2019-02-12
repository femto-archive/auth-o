import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
    fab: {
        position: 'absolute',
        top: theme.spacing.unit * 2,
        left: theme.spacing.unit * 2,
    }
})

function CloseButton(props) {
    const { classes } = props

    return (
        <Fab size="small" color="secondary" aria-label="Close" className={classes.fab}>
            <CloseIcon />
        </Fab>
    )
}

CloseButton.propTypes = {
    classes: PropTypes.object.isRequired,
}

const styledCloseButton = withStyles(styles)(CloseButton)
export { styledCloseButton as CloseButton }