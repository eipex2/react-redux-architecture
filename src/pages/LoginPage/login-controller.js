//1. import session service
import { Session } from '../../services'

//2. create our mapDispatchToProps
export const mapDispatchToProps = dispatch => {
    const { API, Actions } = Session
    return {
        loginUser: (email, password) => API.loginUser(email, password).then((user) => {
            dispatch(Actions.setUser(user))
        })
    }
}

