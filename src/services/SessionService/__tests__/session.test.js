import Session from '../session-index'
import { setUser } from '../session-actions'

import { mockUser } from '../__mocks__/data'

describe('[SessionService]', () => {

    describe('[SessionReducer]', () => {

        it('shd return the default state', () => {

            const initialState = Session.Reducer()

            expect(initialState).toEqual({ user: null })
        })

        it('shd return logged in state when login action is dispatched', () => {

            const loggedInState = Session.Reducer(undefined, setUser(mockUser))

            expect(loggedInState).toEqual({ user: mockUser })
        })
    })
})