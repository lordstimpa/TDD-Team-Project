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

    width: 280px;
    height: 385px;
    background: #74a7f3;
    border-radius: 16px;

    margin-top: 2rem; // Temporary OBS!! comment out later
`;

const WeatherCardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: .5rem;
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
    padding: .25rem .5rem .125rem;
    margin-top: .5rem;
    border-radius: 8px;

    background: #6696dd;

    h3 {
        font-size: 20px;
        padding: 0;
        margin: .125rem;
    }
`;
//styled components end


function WeatherCard(props) {

    const Url = "http://localhost:5096/weather/" + props.place;
    const [weatherData, setWeatherData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(Url);
            setWeatherData(result.data);
            //console.log(result.data);
        };
        fetchData();
    }, []);


    return (
        <>
            {weatherData && (
                <WeatherCardContainer>
                    <WeatherCardHeader>
                        <h2>{weatherData.location.name}</h2>
                    </WeatherCardHeader>


                    <StyledImg src={weatherData.current.condition.icon} alt="Weather Icon" />

                    <WeatherInfoContainer>
                        <h2>Currently {weatherData.current.condition.text}</h2>
                        <h2>{weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</h2>
                        <h3>Wind: {weatherData.current.wind_kph} kph / {weatherData.current.wind_mph} mph</h3>
                        <h3>Wind Degree: {weatherData.current.wind_degree}</h3>
                        <h3>Humidity: {weatherData.current.humidity}</h3>
                    </WeatherInfoContainer>
                </WeatherCardContainer>
            )}
        </>
    );
}

export default WeatherCard;