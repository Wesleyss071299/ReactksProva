import React from 'react';
import { CartItemContainer, ButtonDelete, CartItemInfo, CartItemPrice } from './styles';
import { useAppDispatch } from '../../store/hooks'
import { RemoveCart } from '../../store/cart-actions';
const CartItem: React.FC<{id: number, betNumbers: number[], type: string, price: number, color: string}> = (props) => {
    const dispatch = useAppDispatch();
    return(
        <CartItemContainer>
            <ButtonDelete onClick={() => dispatch(RemoveCart(props.id))}/>
            <CartItemInfo color={props.color}>
                <p>{props.betNumbers.join(', ')}</p>
                <CartItemPrice color={props.color}>
                    <p>{props.type}</p>
                    <strong>R$ {props.price.toFixed(2).split('.').join(',')}</strong>
                </CartItemPrice>
            </CartItemInfo>
        </CartItemContainer>
    )
}

export default CartItem;