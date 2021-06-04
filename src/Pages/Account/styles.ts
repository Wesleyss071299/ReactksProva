import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 150px;
    h2 {
        font-size: 20px;
		text-align: center;
		font-style: italic;
    }
	@media(max-width: 800px){
		margin-top: 30px;
		display: flex;
		flex-direction: column;
	}
`;

export const Input = styled.input`
	border-radius: 14pc; 
	border: 0px solid; 
	padding: 30px; 
	width: 100%;
	font-size: 17px;
	color: #9D9D9D;
	font-weight: bold;
	font-style: italic;
	:focus {
		outline: none;
	}
`;

export const SaveButton = styled.button`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	color: #707070;
	background-color: #fff;		
`

