import './App.css'
import React from 'react'
import styled from 'styled-components'

//import WeatherCard from './weather-card'
import WeatherCardList from './weather-card-list';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 1rem;
`;

function App() {

  return (
    <>
      <AppContainer>
        <WeatherCardList />
      </AppContainer>
    </>
  )
}

export default App
