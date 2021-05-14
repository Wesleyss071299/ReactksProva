import React from 'react';
import {BetItemContainer,BetItemInfo, TypeText} from './styles';

const BetItem: React.FC<{betNumbers: number[], price: number, type: string, color: string}> = (props) => {
    return(
    <BetItemContainer >
        <BetItemInfo color={props.color}>
            <strong>{props.betNumbers.join(', ')}</strong>
            <p>30/11/2020 - (R$ {props.price.toFixed(2).split('.').join(',')})</p>
            <TypeText color={props.color}>{props.type}</TypeText>
        </BetItemInfo>
    </BetItemContainer>
    )
}

export default BetItem;