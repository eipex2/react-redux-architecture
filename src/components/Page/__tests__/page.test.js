import React from 'react'
import { shallow } from 'enzyme'

import Page from '../page'

describe('[<Page />]', () => {

    it('renders it\'s children', () => {
        const wrapper = shallow(<Page>
            <div id="child">Hello</div>
        </Page>)

        expect(wrapper.find('#child').text()).toBe('Hello')
    })
})