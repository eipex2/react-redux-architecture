import { LOG_IN_USER } from './session-actions'

const INITIAL_STATE = {
    user: null
}

const SessionReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {

        case LOG_IN_USER:
            return Object.assign({}, state, { user: action.data })
        default:
            return state;
    }
}

export default SessionReducer