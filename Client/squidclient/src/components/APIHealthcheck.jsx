import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const APIHealthcheck = () => {
  const [requestCount, setRequestCount] = useState(0);
  const [healthCheck, setHealthCheck] = useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:5096/healthcheck");
        setHealthCheck("Online");
      } catch (error) {
        console.error("Error fetching data:", error);
        setHealthCheck("Offline");
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h2>API Status: {healthCheck}</h2>
      <h2>Request Count: {requestCount}</h2>
    </Container>
  );
};

export default APIHealthcheck;

const Container = styled.div`
  & h2 {
    font-family: var(--font-family-1);
    font-weight: 300;
    font-size: 24px;
  }
  & span {
    color: #8f5f00;
    font-size: 2.6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  & .api-info-container {
    background-color: transparent;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }

  & .api-request-btn {
    background: linear-gradient(180deg, #19376d, #0b2447);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-bottom: 0;
    cursor: pointer;
    font-size: 1em;
    transition: 0.1s linear;
  }

  & .status-toggle-btn {
    background: linear-gradient(180deg, #19376d, #0b2447);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-bottom: 0;
    cursor: pointer;
    font-size: 1em;
    transition: 0.1s linear;
  }
`;
