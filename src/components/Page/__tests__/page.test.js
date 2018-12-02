import React from 'react'
import { shallow } from 'enzyme'

import Page from '../page'

describe('[<Page />]', () => {

    it('renders it\'s children', () => {
        const wrapper = shallow(<Page />)

        expect(wrapper.getElement()).not.toBeNull()
    })
})