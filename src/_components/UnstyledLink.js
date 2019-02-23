import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
    console.log(theme)
    return ({
    unstyledList: {
        color: theme.palette.common.white,
        textDecoration: 'none'
    }
})}

const UnstyledLink = ({ classes, children, ...props }) => (
    <Link className={classes.unstyledList} {...props}>
        {children}
    </Link>
)

const styledUnstyledLink = withStyles(styles)(UnstyledLink)
export { styledUnstyledLink as UnstyledLink }