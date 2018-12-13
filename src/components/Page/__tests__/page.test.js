import React from 'react'
import { shallow } from 'enzyme'

import Page from '../page'

describe('[<Page />]', () => {

    it('renders it\'s children if not an authenticated rout and user is undefined', () => {
        const wrapper = shallow(<Page>
            <div id="child">Hello</div>
        </Page>)

        expect(wrapper.find('#child').text()).toBe('Hello')
    })

    it('shd render loginpage if it is an authenticated route and user is undefined', () => {
        const wrapper = shallow(<Page authenticated>
            <div>Authenticated Page</div>
        </Page>)

        expect(wrapper.find('.login-view')).not.toBeNull()
    })

    it('shd render page if it is an authenticated route and user is defined', () => {

        const mockUser = {
            username: 'test',
            email: 'test@ex.com'
        }
        const wrapper = shallow(<Page authenticated user={mockUser}>
            <div>Authenticated Page</div>
        </Page >)

        expect(wrapper.find('.login-view')).not.toBeNull()
    })
})