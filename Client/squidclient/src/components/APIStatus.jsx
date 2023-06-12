import React from "react";
import APIHealthcheck from "./APIHealthcheck";

const APIStatus = () => {
  return (
    <div className="api-info-container">
      <APIHealthcheck />
    </div>
  );
};

export default APIStatus;
