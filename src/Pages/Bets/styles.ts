import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
	justify-content: space-evenly;
	align-items: baseline;
    margin-top: 79px;
    @media(max-width: 800px) {
        flex-direction: column;
        width: 100%;
        div {
            flex-direction: column;
        }
  }


`;
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    h1 {
        margin-right: 45px;
        font-size: 24px;
        text-transform: uppercase;
        font-style: italic;
        font-weight: bold;
    }

    p {
        margin-right: 20px;
        font-size: 17px;
        font-style: italic;
        font-weight: lighter;
    }

    @media(max-width: 800px) {
        div {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
`;

export const NewBet = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #B5C401;
    text-decoration: none;
    @media(max-width: 800px) {
     position:fixed;
     top: 60px;
    }
`;
export const ListContainer = styled.div``;
