import { createSlice} from '@reduxjs/toolkit';
import { CartItem } from '../interfaces/cart-interfaces'


const initialState = {
    items: [] as CartItem[],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem: CartItem = action.payload;
            state.items.push({
                id: newItem.id,
                type: newItem.type,
                numbers: newItem.numbers,
                price: newItem.price,
                color: newItem.color
            })
            state.totalPrice = state.items.reduce((total, numero) => total + numero.price, 0)
        },
        removeItemToCart(state, action) {
            const id = action.payload
            const item = state.items.find((item) => item.id === id)
            state.totalPrice = state.totalPrice - (item?.price as number)
            state.items = state.items.filter((item) => item.id !== id)
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;