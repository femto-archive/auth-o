import { userConstants } from '../_constants';

export function user(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return { register: true }
        case userConstants.REGISTER_SUCCESS:
            return {}
        case userConstants.REGISTER_FAILURE:
            return {}

        case userConstants.LOGIN_REQUEST:
            return { login: true }
        case userConstants.LOGIN_SUCCESS:
            return { logged_in: true }
        case userConstants.LOGIN_FAILURE:
            return { login_failure: true }

        case userConstants.LOGOUT_REQUEST:
            return { logout: true }
        case userConstants.LOGOUT_SUCCESS:
            return { logged_out: true }
        case userConstants.LOGOUT_FAILURE:
            return { logout_failure: true }

        default:
            console.log('unknown action type', state, action)
            return state
    }
}