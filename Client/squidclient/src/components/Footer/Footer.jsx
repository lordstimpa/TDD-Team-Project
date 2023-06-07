import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #0B2447;
  padding: 10px;
  text-align: center;
  color: #A5D7E8;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} WeatherStationAB. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;