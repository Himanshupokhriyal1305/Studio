import React from "react";
import "./ChannelAnalytics.css"; // Add this CSS file for styling

const ChannelAnalytics = () => {
  return (
    <div className="channel-analytics-container">
      <div className="header">
        <h2>Channel analytics</h2>
        <button className="advanced-mode-button">Advanced mode</button>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <span className="tab  ">Overview</span>
          <span className="tab">Content</span>
          <span className="tab">Audience</span>
          <span className="tab">Trends</span>
        </div>
        <div className="date-selector">
          <span>30 Nov – 27 Dec 2024</span>
          <button className="dropdown-button">Last 28 days ▾</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ChannelAnalytics;
