import styled from "styled-components";
import { Link } from "react-router-dom";

const heightOfMenu = "700px"

export const NavMenu = styled.div`
  margin: 0px;
  
`;
export const NavLogo = styled.h1`
font-family: 'Comforter', cursive;
cursor: pointer;

`;
export const NavItems = styled.ul`
justify-content:center;
align-items:center;
display:flex;
list-style-type:none;
cursor: pointer;
@media screen and (max-width: 992px) {
    display:none;
  }
`;


export const Content = styled.div`
z-index:1;
overflow:hidden;

transform:
   translateY(
      ${p => p.isOpen ? 0 : `-${heightOfMenu}`}
   );
   transition: transform 0.45s;

`
export const Menu = styled.div`
z-index:6;
overflow:hidden;
display:flex;
flex-direction:column;
background-color:rgba(0, 0, 0, 0.822);
border-bottom-left-radius:2rem;
border-bottom-right-radius:2rem;
color:white;
margin-bottom:99px;

`
export const MenuButton = styled.div`
z-index:1;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
overflow:hidden;
margin:10px;
`
export const Collapse = styled.div`

`
