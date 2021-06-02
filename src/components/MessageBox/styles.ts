import styled from 'styled-components';

export const ErrorContainer = styled.div<{color?: string}>`
    display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.color};
	margin-top: 10px;
	border-radius: 20px;
`;

export const ErrorText = styled.p`
    color: #ffff;
`;
