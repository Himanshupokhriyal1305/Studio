import React from "react";
import "./DashboardStats.css";
import { images } from "../Image/Allimages";


const DashboardStats = () => {
  return (
    <div className="dashboard-stats">
      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-item" style={{ backgroundColor: '#8888881a', borderRight :"1px solid #8888881a" }}>
          <p className="views">Views</p>
          <p className="value d-flex text-center justify-content-center ">
            40{" "}
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope tp-yt-iron-icon icon-green"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "15px",
                height: "15px",
              }}
            >
              <g class="style-scope tp-yt-iron-icon">
                <path
                  d="M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4l1.4,1.4L9.8,17.3z M12,3c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S17,3,12,3 M12,2 c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2L12,2z"
                  class="style-scope tp-yt-iron-icon icon-green"
                ></path>
              </g>
            </svg>
          </p>
          <p className="info">About the same as usual</p>
        </div>
        <div className="stat-item"style={{ backgroundColor: '#8888881a', borderRight :"1px solid #8888881a" }}>
          <p className="views">Watch time (hours)</p>
          <p className="value d-flex text-center justify-content-center ">
            0.3{" "}
            <svg
  viewBox="0 0 24 24"
  preserveAspectRatio="xMidYMid meet"
  focusable="false"
  className="style-scope tp-yt-iron-icon"
  style={{
    pointerEvents: "none",
    display: "block",
    width: "15px",
    height: "15px",
  }}
>
  <g
    version="1.1"
    x="0px"
    y="0px"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    style={{ enableBackground: "new 0 0 24 24" }}
    className="style-scope tp-yt-iron-icon"
  >
    <path
      d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18.41l-4.71-4.71l1.41-1.41L11,14.59V6h2v8.59
        l2.29-2.29l1.41,1.41L12,18.41z"
      className="style-scope tp-yt-iron-icon"
      fill="gray"
    />
  </g>
</svg>

          </p>
          <p className="info">38% less than previous 28 days</p>
        </div>
        <div className="stat-item">
          <p className="views">Subscribers</p>
          <p className="value d-flex text-center justify-content-center ">
            -2
            <svg
  viewBox="0 0 24 24"
  preserveAspectRatio="xMidYMid meet"
  focusable="false"
  className="style-scope tp-yt-iron-icon"
  style={{
    pointerEvents: "none",
    display: "block",
    width: "15px",
    height: "15px",
  }}
>
  <g
    version="1.1"
    x="0px"
    y="0px"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    style={{ enableBackground: "new 0 0 24 24" }}
    className="style-scope tp-yt-iron-icon"
  >
    <path
      d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18.41l-4.71-4.71l1.41-1.41L11,14.59V6h2v8.59
        l2.29-2.29l1.41,1.41L12,18.41z"
      className="style-scope tp-yt-iron-icon"
      fill="gray"
    />
  </g>
</svg>

          </p>
          <p className="info">100% less than previous 28 days</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <div className="chart px-4">
           <img src={images.grapha} class="graph" alt="Logo" />
         
        </div>
        <div className="chart-labels">
          <span>30 Nov 2024</span>
          <span>5 Dec 2024</span>
          <span>9 Dec 2024</span>
          <span>14 Dec 2024</span>
          <span>18 Dec 2024</span>
          <span>23 Dec 2024</span>
          <span>27 Dec 2024</span>
        </div>
      </div>

      {/* Button */}
      <div className="d-flex justify-content-start ps-4">
      <button className="see-more-btn  ">See more</button>

      </div>
    </div>
  );
};

export default DashboardStats;
