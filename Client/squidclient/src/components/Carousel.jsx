import { useState, useRef, useEffect } from 'react';
import WeatherCard from "./weather-card";
import styled from "styled-components";
import ButtonsChevron from './ButtonsChevron';

const Carousel = (props) => {
    const [weatherData, setWeatherData] = useState([props.weatherData]);
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        //console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        //console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    console.log(weatherData.length)

    return ( 
        <>
            <CarouselContainer id="bookmarks" className="carousel" ref={carousel} >
                {weatherData.map((item, index) => {
                    return (
                        <CarouselItem key={index}>
                            <WeatherCard />
                        </CarouselItem>
                    )
                })}
            </CarouselContainer>

            <ButtonsChevron handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
        </>
    );
}
 
export default Carousel;

const CarouselContainer = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
overflow: hidden;
scroll-behavior: smooth;
margin: 0 auto;
width: 100%;
max-width: 900px;

> div {
display: flex;

}

::-webkit-scrollbar {
display: none;
}

@media screen and (max-width: 500px) {
    min-width: 200px; //temporary
    max-width: 300px;
    padding-left: 0; //temporary
    justify-content: flex-start;
}

@media screen and (min-width: 501px) and (max-width: 768px) {
    min-width: 200px; //temporary
    max-width: 500px;
    padding-left: 0; //temporary
    justify-content: flex-start;
}
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: center;

  @media screen and (max-width: 768px) {
    min-width: 200px; //temporary
    max-width: 300px;
}
`;
