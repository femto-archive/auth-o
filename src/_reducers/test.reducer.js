import { testConstants } from '../_constants';

export function test(state = {}, action) {
    switch (action.type) {
        case testConstants.REQUEST:
            return { test: true };
        case testConstants.SUCCESS:
            return {};
        case testConstants.FAILURE:
            return {};
        default:
            return state
    }
}