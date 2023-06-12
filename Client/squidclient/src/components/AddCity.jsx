import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  & .Parent {
    width: 100%;
    padding: 2em;
    background: linear-gradient(45deg, #576cbc, #a5d7e8);

    & h1,
    p,
    label, input {
      margin: 0;
      font-family: var(--font-family-1);
    }

    & h1 {
      text-align: center;
      padding: 0.5em;
      color: #FFF;
    }

    & form {
      width: 50%;
      margin: auto;
      display: flex;
      flex-direction: column;

      & label {
        color: #FFF;
      }

      & input {
        margin: 16px 0;
        padding: 8px;
        border-radius: 8px;
        border: none;
      }

      & input[type=submit] {
          font-size: 1em;
          background: linear-gradient(180deg, #19376D, #0B2447);
          color: #FFF;
          transition: 0.1s linear;
          
          :hover {
            cursor: pointer;
            box-shadow: 0 0 5px 5px #FFF;
          }

          :active {
            transform: scale(0.95);
          }
        }
    }
  }
`;

const AddCity = () => {
  return (
    <Container>
      <div className="Parent">
        <form>
          <h1>Add a new City</h1>
          <label for="city">City name:</label>
          <input type="text" id="city"></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    </Container>
  );
};

export default AddCity;
