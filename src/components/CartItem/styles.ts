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

export const CartItemInfo = styled.div`
    margin-left: 12px;
	padding-left: 10px;
	max-width: 210px;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
    border-left: 3px solid #7F3992;
`;

export const CartItemPrice = styled.div`
    display: flex;
    p {
    	margin-right: 10px;
        margin-top: -5px;
    }
`;