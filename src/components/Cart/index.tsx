import React from 'react'
import { CartInfo, TotalCart, TotalCartNumber} from './styles';

const Cart: React.FC = () => {
    return(
        <div>
            <CartInfo>
                <h1>Cart</h1>
            </CartInfo>
            <TotalCart>
                Cart 
                <TotalCartNumber>Total: R$10,00</TotalCartNumber>
            </TotalCart>
        </div>
    )
}

export default Cart;