import Session from '../session-index'
import { setUser } from '../session-actions'

import { mockUser } from '../__mocks__/data'

describe('[SessionService]', () => {

    describe('[SessionReducer]', () => {

        it('shd return the default state', () => {

            //1. get the initial state
            const initialState = Session.Reducer()

            //2. validate the initial state
            expect(initialState).toEqual({ user: null })
        })

        it('shd return logged in state when login action is dispatched', () => {

            //1. call the reducer with the setUser action
            const loggedInState = Session.Reducer(undefined, setUser(mockUser))

            //2. validate the logged in state
            expect(loggedInState).toEqual({ user: mockUser })
        })
    })
})