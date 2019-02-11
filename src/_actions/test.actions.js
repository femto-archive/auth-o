import { testConstants } from '../_constants'
import { testService } from '../_services'
import { history } from '../_helpers'

export const testActions = {
    a
}

function a(test) {
    return dispatch => {
        dispatch(request({ test }))

        console.log('a func', test)

        testService.a(test)
            .then(response => {
                dispatch(success(response))
                history.push('/')
            })
            .catch(err => {
                dispatch(failure(err.toString()))
            })
    }

    function request(res) { return { type: testConstants.REQUEST, res } }
    function success(res) { return { type: testConstants.SUCCESS, res } }
    function failure(error) { return { type: testConstants.FAILURE, error } }
}