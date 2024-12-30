import React from "react";
import "./Navbar.css";
import { images } from "../Image/Allimages";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between px-3 py-2 shadow-sm bg-white stick">
      {/* Left section with menu toggle button */}
      <div className="d-flex align-items-center">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope tp-yt-iron-icon"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "30px",
            height: "20px",
          }}
        >
          <g class="style-scope tp-yt-iron-icon">
            <path
              d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
              class="style-scope tp-yt-iron-icon"
            ></path>
          </g>
        </svg>

        <h5 class="logo-container mt-1 ms-3">
          <img src={images.logo} class="chakra-icon logo-custom" alt="Logo" />
        </h5>
      </div>

      {/* Center section with search input */}
      <div className="d-flex align-items-center  rounded-pill  w-50 justify-content-center">
        <form className="d-flex align-items-center  rounded-pill  form-details w-100">
          <button type="submit" className="btn position-absolute">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope tp-yt-iron-icon"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "20px",
                height: "20px",
              }}
            >
              <g class="style-scope tp-yt-iron-icon">
                <path
                  d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                  class="style-scope tp-yt-iron-icon"
                ></path>
              </g>
            </svg>{" "}
          </button>
          <input
            type="search"
            placeholder="Search across your channel"
            className="form-control top-search-input ps-5  rounded-pill secondary "
          />
        </form>
      </div>

      {/* Right section with icons */}
      <div className="d-flex align-items-center">
        <div>
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope tp-yt-iron-icon"
            style={{
                pointerEvents: "none",
                display: "inherit",
                width: "25px",
                height: "25px",
                marginRight : "12px",
              }}
            
            
          >
            <g class="style-scope tp-yt-iron-icon">
              <path
                d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                class="style-scope tp-yt-iron-icon"
              ></path>
            </g>
          </svg>
        </div>
        <button className="btn create-button d-flex align-items-center">
          <i className="fa-solid fa-video me-2"></i>
          Create
        </button>
        <h5 className="user-container me-3 ms-3 ">
          <img
            src={images.user}
            className="chakra-icon user-custom rounded-pill"
            alt="User"
          />
        </h5>
      </div>
    </div>
  );
};

export default Navbar;
