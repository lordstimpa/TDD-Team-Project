import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #0b2447;
  padding: 10px;
  text-align: center;
  color: #a5d7e8;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; {new Date().getFullYear()} Squid Weather. All rights reserved.
      </p>
    </StyledFooter>
  );
};

export default Footer;
