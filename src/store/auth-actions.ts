import { AppDispatch } from './index'
import { authActions } from './auth-slice';
import { User } from '../interfaces/user-interfaces';
import api from '../services/api'


export const Login = (user: User) => {
    
    return async(dispatch: AppDispatch) => {
            await api.post('/sessions', user)
            .then((response) => dispatch(authActions.login({token: response.data.token, user}))) 
            .catch(function (error) {
                if (error.response) {
                  console.log(error.response.data)
                }
            })

    }
}

export const Logout = () => {
    return(dispatch: AppDispatch) => {
        dispatch(authActions.logout())
    }
}