import React from 'react';
import { ErrorContainer, ErrorText } from './styles';
const MessageBox: React.FC<{title: string, color: string}> = (props) => {
    return(
        <ErrorContainer color={props.color}>
            <ErrorText>{props.title}</ErrorText>
        </ErrorContainer>
    )
}

export default MessageBox;