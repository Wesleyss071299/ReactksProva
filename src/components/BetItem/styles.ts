import styled from 'styled-components';

export const BetItemContainer = styled.div`
    display: flex;
	align-items: center;
	margin: 30px 0px;
`

export const BetItemInfo = styled.div<{color?: string}>`
    margin-left: 12px;
	padding-left: 10px;
	max-width: 280px;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
    
    border-left: 7px solid ${props => props.color};
	p {
		font-weight: bold;
		font-size: 15px;	
        font-weight: lighter;
	}
`;

export const TypeText = styled.p<{color?: string}>`
    color: ${props => props.color}
`;