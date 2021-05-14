import styled from 'styled-components'
import { Link } from "react-router-dom";
export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    font-size: 20px;
    font-style: italic;
    font-weight: 900;
    color: #707070;

    div {
        display: flex;
        align-items: center;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 2.75em;
        margin-block-start: 0;
	    margin-block-end: 0;
    }

    hr {
        width: 100%;
        margin: 0;
        border: none;
        border-radius: 6px 6px 6px 6px;
        border-bottom: yellowgreen 7px solid;
    }
    
`;


export const NavLink = styled(Link)`
    display: inline-flex;
	text-decoration: none;
    font-weight: bold;
	margin: 0 35px;
	color: #707070;
    
    svg {
	    margin-left: 10px;
    }
`;