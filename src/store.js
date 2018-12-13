import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

import { Session } from './services'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    sessionState: Session.Reducer
})

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            thunk
        )
    ))

export default store