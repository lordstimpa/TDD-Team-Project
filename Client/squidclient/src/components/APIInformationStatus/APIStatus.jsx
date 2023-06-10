import React from 'react';
import APIInformation from './APIInformation';
import './APIInformationStatus.css';

const APIStatus = () => {
  return (
    <div className="api-info-container">
      <h2>API Status</h2>
      <APIInformation />
    </div>
  );
};

export default APIStatus;
