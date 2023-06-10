import * as React from 'react';

import WeatherCard from './weather-card';

function WeatherCardList() {

    const tempArr = ["stockholm", "london", "berlin"]

    return (
        <>
            {tempArr.map((place, index) => (
                <WeatherCard place={place} key={index} />
            ))}
        </>
    )
}

export default WeatherCardList