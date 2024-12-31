import React from "react";
import "./RealtimeDashboard.css"; // Create a separate CSS file for styling
import { images } from "../Image/Allimages";

const RealtimeDashboard = () => {
  return (
    <div className="dashboard">
      <snap className="fs-5 m-0"> 𝗥𝗲𝗮𝗹𝘁𝗶𝗺𝗲</snap>{" "}
      <div className="m-0 sizew">
        {" "}
        <div class="pulse red"></div>Updating live
      </div>
      <hr />
      <div className="">
        {" "}
        <strong className="fs-5">360</strong>{" "}
      </div>
      <div className="views text-start">Subscribers</div>
      <div className="stats">
        <div className="stat-item text-start">
          <button className=" px-3 live-count ">See live count</button>
        </div>
        <hr />
        <strong className="">２</strong>
        <div className="label">Views • Last 48 hours</div>

        <div className="views">
          <div className="graph">
            <img className="w-100 " src={images.tow} alt="fallback image" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        {" "}
        <div className="views">48</div>
        <div className="views">Now</div>
      </div>
      <div className="top-content mt-4">
        <div className="d-flex justify-content-between">
          {" "}
          <div className="views">Top content</div>
          <div className="views">0 views</div>
        </div>

        <div className="content-item mt-2">
          <div className="child">
            
            <img className="child " src={images.boy} alt="fallback image" />
            <p className="d-flex justify-content-end" style={{}}>
  <svg
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    className="style-scope tp-yt-iron-icon"
    style={{
      pointerEvents: "none",
      display: "inherit",
      height: "15px",
      borderRadius: "2px",
      backgroundColor: "white",
      position: "relative",
      top: "-17px",
      right: "1px",
    }}
  >
    <g
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="style-scope tp-yt-iron-icon"
    >
      <path
        d="M10.65,1C10.65,1,10.65,1,10.65,1c-0.37,0-0.75,0.1-1.09,0.31L4.25,4.46C3.44,4.93,2.96,5.89,3,6.9  C3.05,7.9,3.58,8.77,4.39,9.18c0.02,0.01,0.75,0.35,0.75,0.35l-0.9,0.53c-1.14,0.68-1.58,2.27-0.98,3.55C3.69,14.49,4.5,15,5.35,15  c0.37,0,0.74-0.1,1.09-0.31l5.31-3.15c0.8-0.48,1.29-1.43,1.24-2.45c-0.04-0.99-0.58-1.87-1.39-2.27c-0.02-0.01-0.75-0.35-0.75-0.35  l0.9-0.53c1.14-0.68,1.58-2.27,0.97-3.55C12.31,1.51,11.49,1,10.65,1L10.65,1z"
        className="style-scope tp-yt-iron-icon"
        fill="red"
      ></path>
    </g>
  </svg>
</p>

          </div>
          <div className="details ms-2">
            <div className="title">क्या Complan आपकी ...</div>
          </div>
          <p>2</p>
        </div>
        <div className="content-item">
        <div className="child">
            
            <img className="child " src={images.boy} alt="fallback image" />
            <p className="d-flex justify-content-end" style={{}}>
  <svg
    viewBox="0 0 16 16"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    className="style-scope tp-yt-iron-icon"
    style={{
      pointerEvents: "none",
      display: "inherit",
      height: "15px",
      borderRadius: "2px",
      backgroundColor: "white",
      position: "relative",
      top: "-17px",
      right: "1px",
    }}
  >
    <g
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="style-scope tp-yt-iron-icon"
    >
      <path
        d="M10.65,1C10.65,1,10.65,1,10.65,1c-0.37,0-0.75,0.1-1.09,0.31L4.25,4.46C3.44,4.93,2.96,5.89,3,6.9  C3.05,7.9,3.58,8.77,4.39,9.18c0.02,0.01,0.75,0.35,0.75,0.35l-0.9,0.53c-1.14,0.68-1.58,2.27-0.98,3.55C3.69,14.49,4.5,15,5.35,15  c0.37,0,0.74-0.1,1.09-0.31l5.31-3.15c0.8-0.48,1.29-1.43,1.24-2.45c-0.04-0.99-0.58-1.87-1.39-2.27c-0.02-0.01-0.75-0.35-0.75-0.35  l0.9-0.53c1.14-0.68,1.58-2.27,0.97-3.55C12.31,1.51,11.49,1,10.65,1L10.65,1z"
        className="style-scope tp-yt-iron-icon"
        fill="red"
      ></path>
    </g>
  </svg>
</p>

          </div>
          <div className="details ms-2">
            <div className="title">Khatarnaak घटना जो Camera...</div>
          </div>
          <p>0</p>
        </div>
      </div>
      <div className="stat-item text-start">
        <button className=" px-3 seemore">See more</button>
      </div>{" "}
    </div>
  );
};

export default RealtimeDashboard;
