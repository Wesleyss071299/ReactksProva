import React from 'react'
import CartItem from '../CartItem';
import {CartInfo, 
        TotalCart, 
        TotalCartNumber, 
        CartFooter, 
        SaveButton, 
        IconSaveButton, 
        CartBody
} from './styles';

const Cart: React.FC = () => {
    return(
        <div>
            <CartInfo>
                <h1>CART</h1>
            </CartInfo>

            <CartBody>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </CartBody>

            <TotalCart>
                CART 
                <TotalCartNumber>TOTAL: R$10,00</TotalCartNumber>
            </TotalCart>
            <CartFooter>
                <SaveButton>
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