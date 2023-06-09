//libraries
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

//styled components start
const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: flex-start;
  align-items: center;
  font-family: arial;
  font-weight: 400;
  font-size: 16px;
  padding: 20px 0;

  width: 100%;
  max-width: 325px;
  height: 450px;
  background: #ddf1f8;
  border-radius: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  margin: 2em 1em; // Temporary

  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    min-width: 200px;
  }
`;

const WeatherCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 0.25rem;
  //background: blue; // Temporary

  h2 {
    font-family: var(--font-family-1);
    font-weight: 600;
    font-size: 28px;
    color: #0b2447;
    padding: 0;
    margin: 20px 0 15px 0;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const StyledImg = styled.img`
  width: 128px;
  height: 128px;
  object-fit: cover;
  object-position: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  p {
    font-family: var(--font-family-1);
    font-weight: 600;
    font-size: 14px;
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }
`;

const MainData = styled.div`
  background-color: rgba(231, 234, 239, 0.4);
  margin: 15px 35px;
  padding: 0px 20px;
  font-family: var(--font-family-1);
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #0b2447;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const LoadContainer = styled.div`
  align-items: center;
  height: 100%;
  margin: 0 auto;
  padding: 2em;
`;

const StyledFaSpinner = styled(FaSpinner)`
  font-size: 50px;
  color: white;
  animation: spin 2s linear infinite;
  margin-bottom: 20px;
`;
//styled components end

const TempIconUrl = "//cdn.weatherapi.com/weather/128x128/day/113.png";

//functions
function WeatherCard(props) {
  const Url = "http://dev.kjeld.io:20500/weather/" + props.city;
  const [Data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(Url);
      setData(result.data);
      //console.log(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {Data && Data.location && (
        <WeatherCardContainer>
          <WeatherCardHeader>
            <h2>{Data.location?.name}</h2>
          </WeatherCardHeader>
          <MainData>
            <p>
              {Data.current?.temp_c}°C / {Data.current?.temp_f}°F
            </p>
            <StyledImg src={Data.current?.condition.icon} alt="Weather Icon" />
            <p>Currently {Data.current?.condition.text}</p>
          </MainData>
          <WeatherInfoContainer>
            <p>
              Wind: {Data.current?.wind_kph} kph / {Data.current?.wind_mph} mph
            </p>
            <p>Wind Degree: {Data.current?.wind_degree}</p>
            <p>Humidity: {Data.current?.humidity}</p>
          </WeatherInfoContainer>
        </WeatherCardContainer>
      )}
    </>
  );
}

export default WeatherCard;
