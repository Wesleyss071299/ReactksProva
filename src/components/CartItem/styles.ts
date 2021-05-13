import styled from 'styled-components';

export const CartItemContainer = styled.div`
    display: flex;
	align-items: center;
	margin: 10px 20px;
`;

export const ButtonDelete = styled.button`
    background: url(./trash.svg) no-repeat;
	width: 45px;
	height: 35px;
	cursor: pointer;
	padding: 0;
	outline: none;
`;

export const CartItemInfo = styled.div<{color?: string}>`
    margin-left: 12px;
	padding-left: 10px;
	max-width: 280px;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
    border-left: 3px solid ${props => props.color};
	p {
		font-weight: bold;
		font-size: 15px;	
	}
`;

export const CartItemPrice = styled.div<{color?: string}>`
    display: flex;
    p {
		color: ${props => props.color};
		font-weight: bold;
		font-style: italic;
    	margin-right: 10px;
        margin-top: -5px;
    }
	strong {
    	margin-right: 10px;
        margin-top: -5px;
		font-weight: lighter;
	}
`;