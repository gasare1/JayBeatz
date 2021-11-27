import styled from "styled-components";

export const AboutBg = styled.div`
  background-image: linear-gradient(
    to right top,
    #ffffff,
    #c8cacb,
    #919898,
    #616865,
    #393b34
  );
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: auto;
  z-index: -1;
  justify-content:center;
  align-items:center;
  display:flex;
  @media screen and (max-width: 768px) {
    height: auto;
    width:100vw;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;
