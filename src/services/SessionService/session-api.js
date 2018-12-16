import { mockUser } from './__mocks__/data';

//MOCK API

//First, we create a function to verify the user's information.
//This will be replaced by a call to your backend in a real application
const validate = function verifyUserInfo(email, password) {

    if (email === mockUser.email &&
        password === mockUser.password) {

        return true
    }

    return false
}

//Next, we create our mock loginUser function that returns a promise
//and resolves to our mock user if the email and password are correct
// email: foo@bar.com
// password: 1234
//and rejects with the error `Login Failed` otherwise
function loginUser(email, password) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (validate(email, password)) {
                resolve(mockUser)
            }

            reject(Error('Login Failed'))
        }, 100)
    })
}

//Finaly, we export our login user function
export default {
    loginUser
}
