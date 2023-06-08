import './App.css'
import React from 'react'
import styled from 'styled-components'

import WeatherCard from './weather-card'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

function App() {

  return (
    <>
      <AppContainer>
        <WeatherCard />
      </AppContainer>
    </>
  )
}

export default App
