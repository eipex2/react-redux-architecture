//First, we create an action type 
const LOG_IN_USER = "LOG_IN_USER"

//Then, we create an action to set the user
const setUser = data => ({
    type: LOG_IN_USER,
    data
})

//Finally, we export our action
export default {
    setUser,
    LOG_IN_USER
}