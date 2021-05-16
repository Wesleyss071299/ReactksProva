import styled from 'styled-components';

export const ChooseNumber = styled.section`
    display: flex;
	flex-wrap: wrap;
    @media(max-width:800px) {
        width: 100%;
        justify-content: stretch;
    
    } 
    
   
`;

export const Number = styled.div<{background?:  string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.background ? props.background : '#adc0c4'};
    margin: 20px 13px 20px 0px;
    width: 65px;
    height: 65px;
    border-radius: 100px;
    font-size: 1.25em;
    font-weight: 700;
    cursor: pointer;
    color: white;
    @media(max-width: 800px) {
        width: 45px;
        height: 45px;

    }
`
