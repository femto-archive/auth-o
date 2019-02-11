import { userConstants } from '../_constants'
import { userService } from '../_services'
import { history } from '../_helpers'

export const userActions = {
    register,
    login,
    logout
}

function register(username, password) {
    return dispatch => {
        dispatch(request({ username }))

        userService.register(username, password)
            .then(user => {
                dispatch(success(user))
                history.push('/')
            })
            .catch(err => {
                dispatch(failure(err.toString()))
            })
    }

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(err) { return { type: userConstants.REGISTER_FAILURE, err } }
}

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }))

        userService.login(username, password)
            .then(user => {
                dispatch(success(user))
                history.push('/')
            })
            .catch(err => {
                dispatch(failure(err.toString()))
            })
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(err) { return { type: userConstants.LOGIN_FAILURE, err } }
}

function logout() {
    return dispatch => {
        dispatch(request())

        userService.logout()
            .then(response => {
                dispatch(success(response))
                history.push('/')
            })
            .catch(err => {
                dispatch(failure(err.toString()))
            })
    }

    function request() { return { type: userConstants.LOGOUT_REQUEST } }
    function success(res) { return { type: userConstants.LOGOUT_SUCCESS, res } }
    function failure(err) { return { type: userConstants.LOGOUT_FAILURE, err } }
}