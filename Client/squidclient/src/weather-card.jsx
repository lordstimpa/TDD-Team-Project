//libraries
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

//styled components start
const WeatherCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 325px;
    height: 450px;
    background: #74a7f3;
    border-radius: 16px;

    margin-top: 2rem; // Temporary
`;

const WeatherCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: .25rem;
    //background: blue; // Temporary

    h2 {
        font-size: 28px;
        padding: 0;
        margin: 0;
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
    justify-content: flex-start;
    align-items: center;
`;
//styled components end

const TempIconUrl = "//cdn.weatherapi.com/weather/128x128/day/113.png";

//functions




function WeatherCard(props) {

    const BaseUrl = "http://localhost:5096/weather"

    const [weatherData, setWeatherData] = React.useState({ results: [] });

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(BaseUrl);
            setWeatherData(result.data);
            //console.log(result.data);
        };
        fetchData();
    }, []);


    return (
        <>
            <WeatherCardContainer>
                <WeatherCardHeader>
                    <h2>{weatherData.location.name}</h2>
                </WeatherCardHeader>
                <h2>{weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</h2>

                <StyledImg src={weatherData.current.condition.icon} alt="Weather Icon" />
                <h2>Currently {weatherData.current.condition.text}</h2>

                <WeatherInfoContainer>
                    <h3>Wind: {weatherData.current.wind_kph} kph / {weatherData.current.wind_mph} mph</h3>
                    <h3>Wind Degree: {weatherData.current.wind_degree}</h3>
                    <h3>Humidity: {weatherData.current.humidity}</h3>
                </WeatherInfoContainer>
            </WeatherCardContainer>
        </>
    )
}

export default WeatherCard;