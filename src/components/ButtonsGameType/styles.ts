import styled from 'styled-components';

export const ButtonsGameContainer = styled.div`
    flex-direction: row;
`;

export const ButtonGame = styled.button<{color?: string}>`
        width: 113px;
        height: 34px;
        border-radius: 100px 100px 100px 100px;
        border: ${props => props.color} 2px solid;
        min-width: 103px;
        background: none;
        margin: 20px 25px 20px 0;
        padding: 5px 10px;
        font-size: 0.875em;
        font-style: italic;
        font-weight: 700;
`;