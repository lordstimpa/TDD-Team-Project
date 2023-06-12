import HeroBanner from "./components/HeroBanner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import styled from 'styled-components';
import WeatherCard from './components/weather-card'
import React from "react";
import AddCity from "./components/AddCity";

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroBanner />
        <AppContainer id="bookmarks">
          <WeatherCard />
        </AppContainer>
        <Footer />
      </div>
      <AppContainer>
        <AddCity />
      </AppContainer>
    </>
  );
}
export default App;
