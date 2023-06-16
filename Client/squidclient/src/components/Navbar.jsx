import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Nav>
        <LogoH2 onClick={closeMobileMenu}>Squid Weather</LogoH2>
        <NavMenu className={click ? "nav-menu active" : "nav-menu"}>
          <MenuItem>
            <Link
              to="bookmarks"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              Bookmarks
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="api-info-container"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              onClick={closeMobileMenu}
            >
              API Status
            </Link>
          </MenuItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            to="add-city-component"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
          >
            New City
          </NavBtnLink>
        </NavBtn>
        {/* Mobile menu icon*/}
        <Bars onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</Bars>
      </Nav>
    </>
  );
};

export default Navbar;

const Bars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #a5d7e8;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
//styling title as a logo
const LogoH2 = styled.h2`
  color: #a5d7e8;
  font-size: 32px;
  font-family: var(--font-family-2);
  letter-spacing: 0.5px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  font-family: var(--font-family-1);

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 8%;
    position: absolute;
    top: 64px;
    left: -100%;
    padding-top: 1.61rem;
    opacity: 1;
    transition: all 0.5s ease;

    &.active {
      background: #0b2447;
      left: 0;
      opacity: 1;
      transition: all 0.6s ease;
      z-index: 1;
    }
  }
`;

const Nav = styled.nav`
  background: #0b2447;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  z-index: 10;

  .NavbarItems {
    position: fixed;
  }

  @media screen and (min-width: 1920px) {
    padding: 0.5rem calc((100vw - 1700px) / 2);
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin: 0;
  }
`;

const MenuItem = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #a5d7e8;
  }
  &:hover {
    color: #a5d7e8;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 1rem;
    &:hover {
      border: none;
    }
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-family: var(--font-family-1);
  font-weight: 600;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #576cbc;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #a5d7e8;
    color: #0b2447;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #a5d7e8;
      transform: scale(1.2);
      transition: all 0.3s ease;
    }
  }
`;
