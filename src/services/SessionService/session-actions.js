//1. We import our loginUser function from our api
import API from './session-api'

//2. we create an action type 
export const LOG_IN_USER = "LOG_IN_USER"

//3. we create our setUser action
export const setUser = data => ({
    type: LOG_IN_USER,
    data
})

//4. we create our login function which will be used by our 
// //LoginPage
// const login = (email, password) => {
//     return disptach => {
//         return API.loginUser(email, password).then((data) => {
//             //dispatch setUserAction with the user data returned from our 
//             //request
//             disptach(setUserAction(data))
//         })
//     }
// }

//5. We export our actions
export default {
    setUser
}