import styled from "styled-components";

export const CollabBg = styled.div`
background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 120vh;
  z-index: -1;
  margin-top:20rem;
  justify-content:center;
  align-items:center;
  display:flex;
  @media screen and (max-width: 768px) {
    height: 10vh;
    width:100vw;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;
