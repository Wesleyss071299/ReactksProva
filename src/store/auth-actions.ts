import { AppDispatch } from './index'
import { authActions } from './auth-slice';

export const Logout = () => {
    return(dispatch: AppDispatch) => {
        dispatch(authActions.logout())
    }
}