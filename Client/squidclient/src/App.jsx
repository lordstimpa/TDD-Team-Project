import React from "react";
import styled from "styled-components";

import RandomCard from "./components/RandomCard";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <AppContainer>
        <RandomCard />
      </AppContainer>
    </>
  );
}

export default App;
