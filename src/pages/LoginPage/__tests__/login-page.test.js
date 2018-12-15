import React from 'react'
import { shallow } from 'enzyme'

import LoginView from '../login-view'
import LoginPage from '../login-index'

describe('[<LoginPage />]', () => {

    //1. create a mock store
    const mockStore = {
        getState: jest.fn(),
        subscribe: jest.fn(),
        dispatch: jest.fn()
    }

    it('shd render <LoginView /> and view shd match snapshot', () => {

        //2. render the `LoginView`
        const wrapper = shallow(<LoginView />)

        //3. `LoginView` should match snapshot
        expect(wrapper.getElement()).toMatchSnapshot()
    })

    it('shd have default props <LoginPage />', () => {

        //4. render the `LoginPage`
        const wrapper = shallow(<LoginPage store={mockStore} />)

        //5. `LoginPage` should have the loginUser function
        expect(wrapper.prop('loginUser')).toBeInstanceOf(Function)
    })
})