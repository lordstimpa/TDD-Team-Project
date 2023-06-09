import styled from "styled-components";

const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & .Parent {
    border: 1px solid black;
    border-radius: 16px;
    width: 45%;
    height: 500px;
    text-align: center;
    background: #74a7f3;
  }
`;

const RandomCard = () => {
  return (
    <Container>
      <div className="Parent">
        <h1>Random Card #1</h1>
        <p>Random content to be included here..</p>
      </div>
      <div className="Parent">
        <h1>Random Card #2</h1>
        <p>Random content to be included here..</p>
      </div>
    </Container>
  );
};

export default RandomCard;
