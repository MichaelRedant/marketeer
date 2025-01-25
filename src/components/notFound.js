import React from "react";
import "./NotFound.css"; // Zorg ervoor dat deze naar de CSS verwijst

const NotFound = () => {
  return (
    <div className="code-area">
      <span style={{ color: "#777", fontStyle: "italic" }}>
        Xinudesign 404 page not found.
      </span>
      <span>
        <span style={{ color: "#d65562" }}>if</span>(
        <span style={{ color: "#4ca8ef" }}>!</span>
        <span style={{ fontStyle: "italic", color: "#bdbdbd" }}>found</span>)
        {" {"}
      </span>
      <span>
        <span style={{ paddingLeft: "15px", color: "#2796ec" }}>
          <i style={{ width: "10px", display: "inline-block" }}></i>throw
        </span>
        <span>
          (
          <span style={{ color: "#a6a61f" }}>"(╯°□°)╯︵ ┻━┻"</span>);
        </span>
      </span>
      <span>{"}"}</span>
      <span style={{ color: "#777", fontStyle: "italic" }}>
        <a href="/">Go home</a>
      </span>
    </div>
  );
};

export default NotFound;
