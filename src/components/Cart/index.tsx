import React from 'react'
import CartItem from '../CartItem';
import {CartInfo, 
        TotalCart, 
        TotalCartNumber, 
        CartFooter, 
        SaveButton, 
        IconSaveButton, 
        CartBody,
        EmptyCart
} from './styles';
import api from '../../services/api';

import { useAppSelector } from '../../store/hooks'

const Cart: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart)

    const handleSaveButton = async() => {
        const token = localStorage.getItem('token')
        const data = cartItems.items.map((item) => ({
            game_id: item.game_id,
            numbers: item.numbers,
            price: item.price
        }))
       const response =  await api.post('bets', {"bets": data}, { headers :  {"Authorization" : `Bearer ${token}`} })
       console.log(response)
    }

    if (cartItems.totalPrice === 0) {
        return (
            <EmptyCart>Carrinho Vazio!</EmptyCart>
        )
    }

    return(
        <div>
            <CartInfo>
                <h1>CART</h1>
            </CartInfo>

            <CartBody>
                {cartItems.items.map((item) => <CartItem key={item.id} id={item.id} betNumbers={item.numbers} type={item.type} price={item.price} color={item.color}/>)}
            </CartBody>

            <TotalCart>
                CART 
                <TotalCartNumber>TOTAL: R$ {cartItems.totalPrice.toFixed(2).split('.').join(',')}</TotalCartNumber>
            </TotalCart>
            <CartFooter>
                <SaveButton onClick={handleSaveButton}>
                    Save
                    <IconSaveButton  width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </IconSaveButton>
                </SaveButton>
            </CartFooter>
        </div>
    )
}

export default Cart;