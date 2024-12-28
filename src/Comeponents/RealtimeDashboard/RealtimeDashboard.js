import React from "react";
import "./RealtimeDashboard.css"; // Create a separate CSS file for styling
import { images } from "../Image/Allimages";

const RealtimeDashboard = () => {
  return (
    <div className="dashboard">
      <h6 className="m-0">
        {" "}
        <strong>Realtime</strong>{" "}
      </h6>
      <div className="m-0 sizew"> <i class="fa-solid sizefontcircle fa-circle"></i>Updating live</div>
      <hr />
      <div className="">
        {" "}
        <strong>360</strong>{" "}
      </div>
      <div className="views text-start">Subscribers</div>
      <div className="stats">
        <div className="stat-item text-start">
          <button className=" px-3 live-count">See live count</button>
        </div>
        <hr />
        <h6 className="">2</h6>
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
            <img
              className="child "
              src={
                "https://i9.ytimg.com/vi/PfqFX2uwzv8/mq2.jpg?sqp=CPDvwLsG-oaymwEoCMACELQB8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYciBGKDIwDw==&rs=AOn4CLCyR_NBrsLgR1H6y-yXVTh8rE_CBg"
              }
              alt="fallback image"
            />
          </div>
          <div className="details ms-2">
            <div className="title">क्या Complan आपकी Height बढ़ाता है?</div>
          </div>
          <p>2</p>
        </div>
        <div className="content-item">
          <div className="">
            {" "}
            <img
              className="child "
              src="https://i9.ytimg.com/vi/5r5W6eVaVZ4/mq2.jpg?sqp=CJzywLsG-oaymwEoCMACELQB8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYciBBKDMwDw==&rs=AOn4CLBNogwj9Q0Ptj6QH--igubCxLPKng"
              alt="fallback image"
            />
          </div>
          <div className="details ms-2">
            <div className="title">Khatarnaak घटना जो Camera में कैद हुई</div>
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
