import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { AuthAppBar } from '../_components'
import { userActions } from '../_actions'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    appbar: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    noAccount: {
        marginTop: theme.spacing.unit * 1.5,
    },
    register: {
        textDecoration: 'none',
        fontWeight: 'bold',
    }
})

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            password: '',
            remember: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleSubmit(event) {
        const { dispatch } = this.props
        const { id, password, remember } = this.state

        event.preventDefault()

        dispatch(userActions.login(id, { password, remember }))
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleTabChange(event, tab) {
        this.setState({ tab })
    }

    componentDidUpdate() {
        console.log('update login page', this.props)
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <AuthAppBar className={classes.appbar}/>
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <form className={classes.form} onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="id">Username / Email Address</InputLabel>
                                <Input
                                    value={this.state.id}
                                    onChange={this.handleInputChange}
                                    id="id"
                                    name="id"
                                    autoComplete="email"
                                    autoFocus
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" name="remember" checked={this.state.remember} onChange={this.handleInputChange} />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Login
                            </Button>
                            <Typography className={classes.noAccount}>
                                Don't have an account? <Link to='/register' className={classes.register}>Register here</Link>.
                            </Typography>
                        </form>
                    </Paper>
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('test state', state)
    return {}
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage)
const styledLoginPage = withStyles(styles)(connectedLoginPage)

export { styledLoginPage as LoginPage }