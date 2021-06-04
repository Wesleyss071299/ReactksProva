import styled from 'styled-components';

export const CartInfo = styled.div`
	margin: 20px 20px;
	width: 420px;
    h1 {
        font-size: 2em;
        font-weight: 700;
        font-style: italic;
        color: #707070;
        font-weight: bold;
        font-style: italic;

    }
	
    @media(max-width: 800px){
		div {
			width: 100%;
		}
	}

`;

export const TotalCart = styled.h2`
    display: flex;
	margin-left: 20px;
	margin-bottom: 30px;
	color: #707070;
	font-style: italic;
`;

export const TotalCartNumber = styled.span`
    color: #868686;
    margin-left: 10px;
    font-weight: lighter;
`;

export const CartBody = styled.div`
    max-height: 335px;
	overflow: auto;
	margin-bottom: 15px;
`;

export const CartFooter = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	background: #F4F4F4;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	height: 96px;
`;

export const SaveButton = styled.button`
    display: flex;
	align-items: center;
	font-size: 35px;
	color: #27c383;
    background: none;
	padding: 17px 25px;
	border-radius: 10px;
	font-weight: 550;
	cursor: pointer;
	outline: none;
`;

export const IconSaveButton = styled.svg`
    margin-left: 15px;
`;

export const EmptyCart = styled.h2`
	display: flex;
    align-items: center;
	justify-content: center;
`;