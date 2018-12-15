import React from 'react'
import { mount } from 'enzyme'

import PrivateRoute from '../private-route'

import { MemoryRouter } from 'react-router'

describe('[<PrivateRouter />]', () => {

    //1. create a mock user
    const mockUser = {
        email: 'foo@bar.com',
        password: '1234'
    }

    //2. create a function that returns a mock store
    const createMockStore = user => ({
        getState: () => ({
            sessionState: {
                user
            }
        }),
        subscribe: jest.fn(),
        dispatch: jest.fn()
    })

    //3. create a component
    const Component = () => <div id="foo">Some Page</div>


    it('shd NOT render Component if user is undefined', () => {

        //4. create a store without a user
        const mockStore = createMockStore()

        //5. mount the component
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute store={mockStore} component={Component} />
            </MemoryRouter>
        )

        //6. component should NOT exist
        expect(wrapper.find('#foo').exists()).toBe(false)
    })

    it('shd render Component if user is defined', () => {

        //7. create a store with a user defined
        const mockStore = createMockStore(mockUser)

        //8. mount the component
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute store={mockStore} component={Component} />
            </MemoryRouter>

        )

        //9. component should exist
        expect(wrapper.find('#foo').exists()).toBe(true)
    })
})