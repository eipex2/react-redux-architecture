import React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../not-found'

describe('[<NotFound />', () => {

    it('shd render NotFound page', () => {

        const wrapper = shallow(<NotFound />)

        expect(wrapper.getElement()).toMatchSnapshot()
    })
})