import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <Nav>
        <LogoH2>Squid Weather</LogoH2>
        <NavMenu>
          <MenuItem>
            <Link
              to="bookmarks"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Bookmarks
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="general-info"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              General Info
            </Link>
          </MenuItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            to="add-city"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
          >
            New City
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

//styling title as a logo
const LogoH2 = styled.h2`
  color: #a5d7e8;
  font-size: 32px;
  font-family: var(--font-family-2);
  letter-spacing: 0.5px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  font-family: var(--font-family-1);

  @media screen and (max-width: 768px) {
    display: none;
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
`;
