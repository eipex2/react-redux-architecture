import React from 'react'
import { shallow } from 'enzyme'

import DashboardView from '../dashboard-view'
import DashboardPage from '../dashboard-index'


describe('[<DashboardPage>', () => {

    const mockUser = {
        email: 'foo@bar.com',
        password: '1234'
    }

    const mockStore = {
        getState: jest.fn(() => ({
            sessionState: {
                user: mockUser
            }
        })),
        subscribe: jest.fn(),
        dispatch: jest.fn()
    }

    it('s', () => {
        expect(true).toBe(true)
    })

    it('shd render <DashboardView /> and view shd match snapshot', () => {
        const wrapper = shallow(<DashboardView />)

        expect(wrapper.getElement()).toMatchSnapshot()
    })

    it('shd have session state', () => {
        const wrapper = shallow(<DashboardPage store={mockStore} />)

        expect(wrapper.prop('user')).toEqual(mockUser)
    })
})