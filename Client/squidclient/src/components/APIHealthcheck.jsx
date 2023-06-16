import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const APIHealthcheck = () => {
  const [requestCount, setRequestCount] = useState(0);
  const [healthCheck, setHealthCheck] = useState("");

  // GET API status
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://dev.kjeld.io:20500/healthcheck");
        setHealthCheck("Online");
      } catch (error) {
        console.error("Error fetching data:", error);
        setHealthCheck("Offline");
      }
    };
    fetchData();
  }, []);

  // GET API request count
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://dev.kjeld.io:20500/counter");
        setRequestCount(result.data.count);
        // console.log(result.data.count);
      } catch (error) {
        console.error("Error fetching data:", error);
        setRequestCount(0);
      }
    };
    fetchData();
  }, []);

  if (healthCheck === "Online") {
    return (
      <Container>
        <div className="InnerContainer">
          <h2>
            API Status: <span className="statusOnline">{healthCheck} </span>
          </h2>
          <h2>
            Request Count: <span>{requestCount}</span>
          </h2>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="InnerContainer">
          <h2>
            API Status: <span className="statusOffline">{healthCheck} </span>
          </h2>
          <h2>
            Request Count: <span>{requestCount}</span>
          </h2>
        </div>
      </Container>
    );
  }
};

export default APIHealthcheck;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #0b2447;
  padding: 1em 1em 4em 1em;

  & .InnerContainer {
    width: 50%;
    padding: 1em;
    background-color: #ddf1f8;
    border-radius: 10px;
  }

  & h2 {
    font-family: var(--font-family-1);
    font-weight: 400;
    font-size: 24px;
  }

  & .statusOnline {
    color: green;
  }

  & .statusOffline {
    color: red;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
