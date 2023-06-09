import HeroBanner from "./components/HeroBanner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import styled from 'styled-components';
import WeatherCard from './components/weather-card'


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
    </>
  )
}

export default App

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
