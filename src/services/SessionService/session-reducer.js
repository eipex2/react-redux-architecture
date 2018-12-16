import Actions from './session-actions'

//First, we define the initial state
const INITIAL_STATE = {
    user: null
}

const SessionReducer = (state = INITIAL_STATE, action = {}) => {

    const { LOG_IN_USER } = Actions

    switch (action.type) {
        case LOG_IN_USER:
            //Next, We return a new state when the reducer receives the
            //LOG_IN_USER action
            return Object.assign({}, state, { user: action.data })
        default:
            return state;
    }
}

//Finally, we export the reducer
export default SessionReducer