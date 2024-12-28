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

        <h5 class="logo-container mt-1 ms-2">
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
            }}              >
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
          <i className="fa-regular fa-circle-question me-3"></i>
        </div>
        <button className="btn create-button d-flex align-items-center">
          <i className="fa-solid fa-video me-2"></i>
          Create
        </button>
        <h5 className="user-container me-3 ms-3 pt-1">
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
