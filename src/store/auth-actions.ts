import { AppDispatch } from './index'
import { authActions } from './auth-slice';
import { User } from '../interfaces/user-interfaces';

export const Login = (token: string, user: User) => {
    return(dispatch: AppDispatch) => {
        dispatch(authActions.login({token, user}))
    }
}

export const Logout = () => {
    return(dispatch: AppDispatch) => {
        dispatch(authActions.logout())
    }
}