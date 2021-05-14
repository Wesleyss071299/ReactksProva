import { AppDispatch } from './index'
import { authActions } from './auth-slice';

export const Login = (token: string) => {
    return(dispatch: AppDispatch) => {
        dispatch(authActions.login(token))
    }
}

export const Logout = () => {
    return(dispatch: AppDispatch) => {
        dispatch(authActions.logout())
    }
}