import styled from 'styled-components';

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div {
        align-items: center;
        justify-content: center;
        display: flex;
        width: 144px;
        height: 39px;
        border-radius: 100px;
        background-color: #B5C401;
        font-size:  22px;
        color: #fff;
        font-style: italic;
        font-weight: bold;
    }
    h1 {
        font-size: 83px;
        font-style: italic;
    }
`;

export const LogoText = styled.h1`
   font-size: 65px;
   text-align: center;
   font-style: italic;
   font-weight: bold;
`;