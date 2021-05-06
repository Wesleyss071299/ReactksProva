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
	max-width: 650px;
`;
