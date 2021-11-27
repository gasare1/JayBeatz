import {
  Navbar,
  NavItems,
  NavLink,
  NavLogo,
  MobileMenu,
  Menu,
  MenuButton,
  Content,
  Collapse,
} from "./HeaderElements";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiMenuAlt3, HiLockClosed } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { GiHouse } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
function Header() {
  const [navBackground, setNavBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navRef = useRef();
  navRef.current = navBackground;
  const heightOfMenu = "700px";
  const NavLinks = styled(Link)`
    color: ${navBackground ? "black" : "white"};
    justify-content: space-between;

    margin-left: 10rem;
    text-decoration: none;
    &:hover {
      color: lightblue;
    }
    @media screen and (max-width: 992px) {
      display: none;
    }
  `;
  const Menu = styled.div`
    z-index: 6;
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    color: white;
    margin-bottom: 99px;
    transition: 1s ease;
    background-color: ${navBackground ? "white" : "transparent"};
  `;
  const MobileMenu = styled.div`
    margin-top: 200px;
    padding-top: 50px;
    z-index: 1;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    margin-bottom: 20rem;
    display: none;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    transform: translateY(${(p) => (p.isOpen ? 0 : `-${heightOfMenu}`)});
    transition: transform 0.45s;
    @media screen and (max-width: 1024px) {
      display: inline;
    }
  `;
  const Navbar = styled.div`
    background-color: black;
    z-index:1;
    height: 90px;
    overflow: hidden;
    position: relative;
    caret-color:'transparent';
    box-shadow: ${navBackground ? "0 3px 10px rgb(0 0 0 / 0.2)" : ""};
    overflow: hidden;
  `;
  const NavToggle = styled.div`
    display: none;
    font-size: 30px;
    transition: property duration transition-timing-function delay;
    @media screen and (max-width: 992px) {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      transition: property duration transition-timing-function delay;
    }
  `;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(isOpen);
  return (
    <>
      <Navbar
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "white" : "transparent",
          position: "-webkit-sticky",
          position: "sticky",
          top: "0",
        }}
      >
        <Link to='/'><NavLogo >JayBeatz</NavLogo></Link>
        <Collapse isOpen={isOpen} navbar>
          <NavToggle style={{transition: "5s ease"}}>
            {isOpen ? (
              ""
            ) : (
              <HiMenuAlt3 onClick={toggle} />
            )}
          </NavToggle>
          <Container>
          <NavItems isOpen={isOpen}>
            <NavLinks
              to="/"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bolder",
              }}
            >
              Home
            </NavLinks>
            <NavLinks
              to="about"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bolder",
              }}
            >
              About/Works
            </NavLinks>
            <NavLinks
              to="collab"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bolder",
              }}
            >
              Collaborate
            </NavLinks>
            <NavLinks
              to="book"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "bolder",
              }}
            >
              Book Me
            </NavLinks>
          </NavItems>
          </Container>
        </Collapse>
      </Navbar>
      <MobileMenu
        isOpen={isOpen}
        
      >
        <Content isOpen={isOpen} style={{
          position: "-webkit-sticky",
          position: "sticky",
          top: "0",
        }}>
          <Menu style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "black" : "transparent",
          position: "-webkit-sticky",
          position: "sticky",
          top: "20",
        }}>
          <NavToggle style={{transition: "5s ease"}}>
            {isOpen ? (
              <AiOutlineClose onClick={toggle} />
            ) : (
              <HiMenuAlt3 onClick={toggle} />
            )}
          </NavToggle>
            <MenuButton>
              <Link
                duration={1000}
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <GiHouse /> Home
              </Link>
            </MenuButton>
            <MenuButton>
              <Link
                duration={1000}
                to="about"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                {" "}
                About/Works
              </Link>
            </MenuButton>
            <MenuButton>
              <Link
                duration={1000}
                to="collab"
                spy={true}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <MdEmail />
                Collaborate
              </Link>
            </MenuButton>
            <MenuButton>
              <Link
                duration={1000}
                to="book"
                spy={true}
                style={{ textDecoration: "none", ccolor: "#fff" }}
              >
                <BsFillQuestionCircleFill />
                Book Me
              </Link>
            </MenuButton>
          </Menu>
        </Content>
      </MobileMenu>
    </>
  );
}

export default Header;
