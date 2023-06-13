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

    if (weatherData.length <= 0) {
        return <div></div>;
    }
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
justify-content: flex-start;
overflow: hidden;
scroll-behavior: smooth;
margin: 0 auto; 
max-width: 900px;

> div {
display: flex;

}

::-webkit-scrollbar {
display: none;
}

@media screen and (max-width: 768px) {
    min-width: 200px; //temporary
    padding-left: 2em; //temporary
}
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
