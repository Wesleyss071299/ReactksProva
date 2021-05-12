import { CartItemContainer, ButtonDelete, CartItemInfo, CartItemPrice } from './styles';

const CartItem = () => {
    return(
        <CartItemContainer>
            <ButtonDelete />
            <CartItemInfo>
                <p>01,02,04,05,06,07,09,15,17,20,21, 22,23,24,25</p>
                <CartItemPrice>
                    <p>Lotofácil</p>
                    <p>R$ 4,50</p>
                </CartItemPrice>
            </CartItemInfo>
        </CartItemContainer>
    )
}

export default CartItem;