import API from './session-api'

//1. create an action type 
export const LOG_IN_USER = "LOG_IN_USER"

//2. create an action to set the user
export const setUser = data => ({
    type: LOG_IN_USER,
    data
})

//3. export action
export default {
    setUser
}