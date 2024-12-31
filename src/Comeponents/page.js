import React from "react";

const ScrollableList = () => {
  const handleScroll = () => {
    const ulElement = document.querySelector("ul");
    const scrollToElement = document.querySelector(".scrolltome");

    ulElement.scroll({
      top: scrollToElement.offsetTop,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          height: "100px",
          overflowX: "hidden",
          overflowY: "scroll",
          padding: 0,
          margin: 0,
        }}
      >
        <li style={listItemStyle}>Item 11</li>
        <li style={listItemStyle}>Item 12</li>
        <li style={listItemStyle}>Item 13</li>
        <li style={listItemStyle}>Item 14</li>
        <li style={listItemStyle}>Item 15</li>
        <li style={listItemStyle}>Item 16</li>
        <li style={listItemStyle}>Item 17</li>
        <li style={{ ...listItemStyle, backgroundColor: "#f5f5f5" }} className="scrolltome">
          Item 18
        </li>
        <li style={listItemStyle}>Item 19</li>
        <li style={listItemStyle}>Item 20</li>
      </ul>
      <button onClick={handleScroll}>!Scroll Now!</button>
    </div>
  );
};

const listItemStyle = {
  height: "30px",
  background: "#ccc",
  borderBottom: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default ScrollableList;
