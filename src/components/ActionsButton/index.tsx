import React from 'react'

import {ActionButtonContainer} from './styles';
const ActionButton:React.FC<{title: string, onClick: () => void, color?: string}> = (props) => {
    return(
        <ActionButtonContainer onClick={props.onClick} color={props.color}>
            {props.title}
        </ActionButtonContainer>
    )
}

export default ActionButton;