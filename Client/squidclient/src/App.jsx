import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import WeatherCard from "./components/weather-card";
import React from "react";
import AddCity from "./components/AddCity";
import { useState } from "react";

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OuterContainer = styled.div`
  background: linear-gradient(45deg, #576cbc, #a5d7e8);
`;

function App() {
  const [city, setCity] = useState("");

  const handleSubmit = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
      <div>
        <Navbar />
        <HeroBanner />
        <OuterContainer>
          <AppContainer>
            <AddCity onCitySubmit={handleSubmit} />
          </AppContainer>
          <AppContainer id="bookmarks">
            <WeatherCard city={city} />
          </AppContainer>
        </OuterContainer>
        <Footer />
      </div>
    </>
  );
}
export default App;
