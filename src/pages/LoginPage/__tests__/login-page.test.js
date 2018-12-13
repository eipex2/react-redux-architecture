import React from 'react'
import { shallow } from 'enzyme'

import LoginView from '../login-view'
import LoginPage from '../login-index'

describe('[<LoginPage />]', () => {

    const mockStore = {
        getState: jest.fn(),
        subscribe: {}
    }

    it('shd render <LoginView /> and view shd match snapshot', () => {
        const wrapper = shallow(<LoginView />)

        expect(wrapper.getElement()).toMatchSnapshot()
    })

    it('shd have default props <LoginView />', () => {
        const wrapper = shallow(<LoginPage store={mockStore} />)

        expect(wrapper.prop('login')).toBeInstanceOf(Function)
    })
})