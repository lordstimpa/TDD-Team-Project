import styled from "styled-components";

const HeroBanner = () => {
  return (
    <>
      <StyledHeroBanner>
        <StyledBox>
          <h2>
            Welcome to <StyledWeatherText>Squid</StyledWeatherText> Weather!
          </h2>
        </StyledBox>
      </StyledHeroBanner>
    </>
  );
};
export default HeroBanner;

//styling:
const StyledHeroBanner = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* photo background */
  background-image: url(https://images.unsplash.com/photo-1531536260778-3f847182e719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTg0Mzh8MHwxfGFsbHx8fHx8fHx8fDE2ODYxMjYzMDF8&ixlib=rb-4.0.3&q=80&w=1080);
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 200px;
    margin: 0;
  }
`;

const StyledBox = styled.div`
  background-color: rgba(231, 234, 239, 0.7);
  padding: 1em 2.5em;
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
  color: #0b2447;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 200px;
    margin: 0 auto;
    font-size: 20px;
  }
`;
const StyledWeatherText = styled.span`
  color: #8f5f00;
  font-size: 2.6rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
