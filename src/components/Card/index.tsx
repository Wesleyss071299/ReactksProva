import React from 'react';
import { CardContainer } from './styles'
const Card: React.FC = (props) => {
    return(
        <CardContainer>
            {props.children}
        </CardContainer>
    )
}

export default Card