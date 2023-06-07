import styled from 'styled-components';

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <StyledBox>
        <h2>Welcome to <StyledWeatherText>Squid</StyledWeatherText> Weather App!</h2>
      </StyledBox>
    </StyledHeroBanner>
  );
}

export default HeroBanner;

//styling:
const StyledHeroBanner = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;

  /* photo background */
  background-image: url(https://images.unsplash.com/photo-1531536260778-3f847182e719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTg0Mzh8MHwxfGFsbHx8fHx8fHx8fDE2ODYxMjYzMDF8&ixlib=rb-4.0.3&q=80&w=1080);
  background-size: cover;
  background-position: center;
`

const StyledBox = styled.div`
  background-color: rgba(231, 234, 239, 0.7);
  margin: 0 35px;
  padding: 15px 20px;
  font-family: var(--font-family-1);
  font-weight: 300;
  font-size: 24px;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  border-radius: 5px;
  color: #0B2447;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`
const StyledWeatherText = styled.span`
  color: #8F5F00;
  font-size: 2.6rem;
`;