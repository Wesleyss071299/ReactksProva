import { AppDispatch } from './index'
import { cartActions } from './cart-slice'
import { CartItem } from '../interfaces/cart-interfaces'

export const AddCart = (newItem: CartItem) => {
    return (dispatch: AppDispatch) => {
        dispatch(cartActions.addItemToCart(newItem))
    }
}

export const RemoveCart = (id: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(cartActions.removeItemToCart(id))
    }
}