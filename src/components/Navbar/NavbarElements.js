import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
 width: 100%;
 height:80px;
 display:flex;
 align-items:center;
 justify-content:center;
 position:sticky;
 top:0;
 background-color: #ffffff;
 z-index:10;
`;

export const NavContainer = styled.div`
display:flex;
justify-content:flex-start;
height:80px;
width:100%;
padding: 0 24px;

`;

export const NavLogo = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,500&display=swap');
    font-family: 'Kanit', sans-serif;
    font-size: 2.1rem;
    font-weight: 500;
    color: #0290ff;
    margin-left: 5rem;
    align-self: center;
    letter-spacing: 1px;
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    justify-content:center;
    list-style:none;
    text-align:center;
    margin-left: 4rem;
    
`;

export const NavItems = styled.li`
    height:80px;
    

`;

export const NavLinks = styled(LinkR)`
    color: #121212;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.813rem;
    font-weight: normal;
    letter-spacing: 1.9px;
    display:flex;
    align-items:center;
    justify-content:center;
    height:90%;
    text-decoration:none;
    cursor:pointer;
    padding: 0 1rem;


    &.active{
        border-bottom: 3px solid #fcac3d;
        transition: 0.5s all ease-in-out;
        

    }

    &:hover{
        color:#fcac3d;
        transition: 0.5s all ease-in-out;
        
    }
    

`;
