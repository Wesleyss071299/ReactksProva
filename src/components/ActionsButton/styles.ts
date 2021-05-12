import styled from 'styled-components';

export const ActionButtonContainer = styled.button<{color?: string}>`
    background: ${props => props.color ? props.color : 'none' };
	padding: 17px 25px;
	border-radius: 10px;
	font-weight: 550;
	font-size: 1em;
	cursor: pointer;
	outline: none;
    margin-top: 5px;
	margin-right: 25px;
	border: 1px solid #27c383;
	color: ${props => props.color ? '#fff' : '#27c383' };
`