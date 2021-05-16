import styled from 'styled-components';

export const BetContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: baseline;
	margin: 60px auto;
	max-width: 1440px;
    
    section{
        max-width: 750px;
        padding: 10px 10px;
        margin-right: 100px;
    }
	@media(max-width: 800px) {
		display: flex;
		justify-items: center;
		align-items: center;
		margin-left: 50px;
    }

`;

export const GameContainer = styled.section`
    max-width: 750px;
	padding: 10px 10px;
	margin-right: 100px;

`;

export const GameInfoContainer = styled.div`
	max-width: 650px;
	@media(max-width: 800px) {
        div {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
`;

export const GameActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-right: 50px;
	@media(max-width: 800px) {
			justify-content: center;
			flex-direction: row;
			align-items: center;
			flex-wrap: nowrap;

		div {
			display: flex;
			flex-direction: row;
		}
    }

`;

export const CartContainer = styled.div`
	border: 1px solid #e2e2e2;
	border-radius: 10px;
	width: 420px;
	background-color: #FFFFFF;
`;