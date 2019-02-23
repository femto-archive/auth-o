import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { UnstyledLink } from './UnstyledLink'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
}

class AuthAppBar extends Component {
    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            <UnstyledLink to='/'>
                                Auth-O
                            </UnstyledLink>
                        </Typography>
                        <Button color="inherit">
                            <UnstyledLink to="/register"><span>Register</span></UnstyledLink>
                        </Button>
                        <Button color="inherit">
                            <UnstyledLink to="/login">Login</UnstyledLink>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

AuthAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
const styledAuthAppBar = withStyles(styles)(AuthAppBar)
export { styledAuthAppBar as AuthAppBar }