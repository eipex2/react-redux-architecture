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
})