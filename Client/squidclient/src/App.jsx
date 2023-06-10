import React from "react";
import styled from "styled-components";

import AddCity from "./components/AddCity";

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
        <AddCity />
      </AppContainer>
    </>
  );
}

export default App;
