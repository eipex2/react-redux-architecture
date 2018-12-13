import React from 'react'
import { shallow } from 'enzyme'

import PrivateRoute from '../private-route'

import { LoginPage } from '../../pages'

const mockUser = {
    email: 'foo@bar.com',
    password: '1234'
}

describe('[<PrivateRouter />]', () => {

    it('shd render a login page  if user is not logged in', () => {

        const mockStore = {
            getState: () => ({
                sessionState: {
                    user: null
                }
            }),
            subscribe: jest.fn(),
            dispatch: jest.fn()
        }

        const wrapper = shallow(<PrivateRoute store={mockStore} />)

        expect(wrapper.find(LoginPage)).not.toBeNull()
    })

    it('shd render page if user is logged in', () => {

        const mockStore = {
            getState: () => ({
                sessionState: {
                    user: null
                }
            }),
            subscribe: jest.fn(),
            dispatch: jest.fn()
        }

        console.log(mockStore.getState())
        const wrapper = shallow(<PrivateRoute store={mockStore}>
            <div id="foo">Some Page</div>
        </PrivateRoute>)

        expect(wrapper.find('#foo').text()).toBe("Some Pages")
    })
})