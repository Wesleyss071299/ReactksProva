import styled from 'styled-components';

export const ButtonsGameContainer = styled.div`
    flex-direction: row;
`;

export const ButtonGame = styled.button<{color?: string, border?: string}>`
        width: 113px;
        height: 34px;
        border-radius: 100px 100px 100px 100px;
        border: ${props => props.border? props.border : 'none'} 2px solid;
        min-width: 103px;
        background: ${props => props.color};
        margin: 20px 25px 20px 0;
        padding: 5px 10px;
        font-size: 0.875em;
        font-style: italic;
        font-weight: 700;
        color: ${props => props.border? props.border : 'white'}
`;