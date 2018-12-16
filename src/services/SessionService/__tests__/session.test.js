import Session from '../session-index'
import { mockUser } from '../__mocks__/data'

describe('[SessionReducer]', () => {

    it('shd return the initial state', () => {

        const { Reducer } = Session

        //First, we get the initial state of the reducer
        const initialState = Reducer()

        //Then, we validate the initial state
        expect(initialState).toEqual({ user: null })
    })

    it('shd return the loggedInState when setUser action is dispatched', () => {

        const { Actions: { setUser }, Reducer } = Session

        //We call the setUser user action 
        //by parsing it as a param to our Reducer
        const loggedInState = Reducer(undefined, setUser(mockUser))

        //Then, we validate the logged in state
        expect(loggedInState).toEqual({ user: mockUser })
    })
})