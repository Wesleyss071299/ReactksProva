import styled from 'styled-components';

export const BetContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: baseline;
	margin: 75px auto;
	max-width: 1440px;
    
    section{
        max-width: 750px;
        padding: 10px 10px;
        margin-right: 100px;
    }
`;

export const GameContainer = styled.section`
    max-width: 750px;
	padding: 10px 10px;
	margin-right: 100px;
`;

export const GameInfoContainer = styled.div`
	max-width: 750px;
	padding: 0 10px;
`;

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