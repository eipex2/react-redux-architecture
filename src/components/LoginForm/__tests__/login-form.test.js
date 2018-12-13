import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '../login-form'

describe('[<LoginForm/>]', () => {
    var wrapper;

    const mockLoginSuccess = jest.fn(() => {
        return new Promise((resolve) => resolve('success'))
    })

    const mockLoginFailure = jest.fn(() => new Promise((resolve, reject) =>
        reject('error')
    ))

    const mockEvent = {
        preventDefault() { }
    }

    it('shd call login function with correct args when submit is clicked', async () => {
        expect.assertions(1)

        const email = 'test@example.com'
        const password = '1234'

        wrapper = shallow(<LoginForm login={mockLoginSuccess} />)

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
        await wrapper.find('button').simulate('click', mockEvent)

        expect(mockLoginSuccess).toBeCalledWith(email, password)
    })

    it('shd show login error if login fails', async () => {

        wrapper = shallow(<LoginForm login={mockLoginFailure} />)

        //simulate click
        await wrapper.find('button').simulate('click', mockEvent)

        expect(wrapper.state('error')).toBe(true)
    })
})