import { Session } from '../../services'

//1. create mapDispatchToProps
export const mapDispatchToProps = dispatch => {

    //2. destructure Session
    const { API, Actions } = Session

    return {

        //3. create the loginUser function
        loginUser: (email, password) => API.loginUser(email, password).then((user) => {

            //4. dispatch set user after the promise resolves
            dispatch(Actions.setUser(user))
        })
    }
}

