import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '../login_form'

describe('[<LoginForm/>]', () => {
    var wrapper;
    const mockLogin = jest.fn()
    const mockEvent = {
        preventDefault() { }
    }

    beforeAll(() => {
        wrapper = shallow(<LoginForm login={mockLogin} />)
    })

    it('shd call login function with correct args when submit is clicked', () => {
        expect.assertions(1)

        const email = 'test@example.com'
        const password = '1234'

        //set email
        wrapper.find('[type="email"]').simulate('change', {
            target: {
                name: 'email',
                value: email
            }
        })

        //set password
        wrapper.find('[type="password"]').simulate('change', {
            target: {
                name: 'password',
                value: password
            }
        })

        //simulate click
        wrapper.find('button').simulate('click', mockEvent)

        expect(mockLogin).toBeCalledWith(email, password)
    })
})