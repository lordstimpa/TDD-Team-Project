import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import React, { useState } from "react";
import AddCity from "./components/AddCity";
import Carousel from "./components/Carousel";

function App() {
  const [cities, setCities] = useState([
    "Stockholm",
    "Västerås",
    "Fagersta",
    "Norberg",
    "Avesta",
  ]);

  const handleCitySubmit = (city) => {
    setCities((prevCities) => [...prevCities, city]);
  };

  return (
    <>
      <div>
        <Navbar />
        <HeroBanner />
        <OuterContainer>
          <AppContainer>
            <AddCity onCitySubmit={handleCitySubmit} />
          </AppContainer>
          <Carousel weatherData={cities} />
        </OuterContainer>
        <Footer />
      </div>
    </>
  );
}
export default App;

//styles

export const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OuterContainer = styled.div`
  background: linear-gradient(45deg, #576cbc, #a5d7e8);
`;
