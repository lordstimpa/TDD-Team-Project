import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  margin: 2em 0;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1000px) {
    width: 100%;
  }

  & .Container {
    display: flex;
    flex-direction: column;

    & .inputContainer {
      display: flex;
      & input:nth-child(1) {
        width: 100%;
        margin-right: 1em;
        height: 25px;
      }
      & input:nth-child(2) {
        width: 110px;
        height: 41.5px;
      }
    }
  }

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
    color: #fff;
  }

  & form {
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;

    & label {
      color: #fff;
    }

    & .error {
      color: #b60000;
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
        box-shadow: 0 0 5px 5px #fff;
      }

      :active {
        transform: scale(0.95);
      }
    }
  }
`;

const AddCity = ({ onCitySubmit }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.city.value.trim() === "") {
      setError(true);
    } else {
      setError(false);
      const response = await fetch(`http://dev.kjeld.io:20500/weather/${city}`);
      const data = await response.json();
      if (data.error) {
        setError(true);
      } else {
        onCitySubmit(city);
        setCity("");
      }
    }
  };

  return (
    <Container id="add-city-component">
      <form onSubmit={handleSubmit}>
        <h1>Add a new City</h1>
        <div className="Container">
          <label htmlFor="city" className={error ? "error" : ""}>
            {error ? "No matching location found" : "City name"}
          </label>

          <div className="inputContainer">
            <input
              type="text"
              id="city"
              placeholder="Stockholm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <input type="submit" value="SUBMIT"></input>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default AddCity;
