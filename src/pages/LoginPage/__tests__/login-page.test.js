import React from 'react'
import { shallow } from 'enzyme'

import LoginView from '../login-view'

describe('[<LoginPage />]', () => {

    it('shd render <LoginView /> and view shd match snapshot', () => {
        const wrapper = shallow(<LoginView />)

        expect(wrapper.getElement()).toMatchSnapshot()
    })
})