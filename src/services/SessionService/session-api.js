import { mockUser } from './__mocks__/data';

//A mock api 

//1. create a function to verify the users email and password
const validate = function verifyUserInfo(email, password) {

    if (email === mockUser.email &&
        password === mockUser.password) {

        return true
    }

    return false
}

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

                if (validate(email, password)) {
                    resolve(mockUser)
                }

                reject(Error('Login Failed'))
            }, 100)
        })
    }
}
