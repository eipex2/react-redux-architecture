import { mockUser } from './__mocks__/data';

export default {
    /**
     * A mock of our login function that accepts
     * an email and password and returns a user.
     * @param {string} email 
     * @param {string} password 
     */
    loginUser(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === mockUser.email &&
                    password === mockUser.password) {
                    resolve(mockUser)
                }
                reject(Error('login failed'))
            }, 100)
        })
    }
}
