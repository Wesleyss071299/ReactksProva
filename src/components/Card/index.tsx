import React from 'react';
import { CardContainer } from './styles'
const Card: React.FC<{onSubmit: (event: React.FormEvent<HTMLFormElement>) => void}> = (props) => {
    return(
        <CardContainer onSubmit={props.onSubmit}>
            {props.children}
        </CardContainer>
    )
}

export default Card