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
                type: newItem.type,
                numbers: newItem.numbers,
                price: newItem.price
            })
            state.totalPrice = state.items.reduce((total, numero) => total + numero.price, 0)
        }
    }
})

export default cartSlice;