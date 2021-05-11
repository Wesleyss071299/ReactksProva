import React from 'react'

import {ActionButtonContainer} from './styles';
const ActionButton:React.FC<{title: string, onClick: () => void}> = (props) => {
    return(
        <ActionButtonContainer onClick={props.onClick}>
            {props.title}
        </ActionButtonContainer>
    )
}

export default ActionButton;