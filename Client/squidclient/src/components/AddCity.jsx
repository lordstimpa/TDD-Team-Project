import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  margin: 2em 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  & .Parent {
    width: 100%;

    & h1,
    p,
    label,
    input {
      margin: 0;
      font-family: var(--font-family-1);
    }

    & h1 {
      text-align: center;
      padding: 0.5em;
      margin-bottom: 1em;
      color: #0b2447;
    }

    & form {
      min-width: 250px;
      max-width: 750px;
      margin: auto;
      padding: 0 2em;
      display: flex;
      flex-direction: column;

      & label {
        color: #0b2447;
      }

      & input {
        margin: 16px 0;
        padding: 8px;
        border-radius: 8px;
        border: none;
      }

      & input[type="submit"] {
        margin-bottom: 0;
        font-size: 1em;
        background: linear-gradient(180deg, #19376d, #0b2447);
        color: #fff;
        transition: 0.1s linear;

        :hover {
          cursor: pointer;
          box-shadow: 0 0 25px 5px #fff;
        }

        :active {
          transform: scale(0.95);
        }
      }
    }
  }
`;

const AddCity = ({ onCitySubmit }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySubmit(city);
    setCity("");
  };

  return (
    <Container>
      <div className="Parent">
        <form onSubmit={handleSubmit}>
          <h1>Add a new City</h1>
          <label for="city">City name:</label>
          <input type="text" id="city" placeholder="Stockholm"></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    </Container>
  );
};

export default AddCity;
