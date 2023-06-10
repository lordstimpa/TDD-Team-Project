import React, { useState } from 'react';
import './APIInformationStatus.css';

const APIInformation = () => {
  const [apiStatus, setApiStatus] = useState('Online');
  const [requestCount, setRequestCount] = useState(0);

  const handleRequest = () => {
    apiStatus === 'Online' ? setRequestCount(requestCount + 1) : alert('API is currently offline. Please try again later.');

  };

  const toggleStatus = () => {
    if (apiStatus === 'Online') {
      setApiStatus('Offline');
    } else {
      setApiStatus('Online');
    }
  };

  return (
    <div className="api-info-container">
      <p>API Status: {apiStatus}</p>
      <p>Request Count: {requestCount}</p>
      <button className="api-request-btn" onClick={handleRequest}>
        Make API Request
      </button>
      <button className="status-toggle-btn" onClick={toggleStatus}>
        {apiStatus === 'Online' ? 'Set Status Offline' : 'Set Status Online'}
      </button>
    </div>
  );
  
};

export default APIInformation;