import React from 'react';
import { ErrorContainer, ErrorText } from './styles';
const Error: React.FC<{title: string}> = (props) => {
    return(
        <ErrorContainer>
            <ErrorText>{props.title}</ErrorText>
        </ErrorContainer>
    )
}

export default Error;