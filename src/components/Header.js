import React from "react";

export default function Header() {
  return (
    <div className="header-box">
        <div className="logo-box">
            <img src={require("../img/Troll_Face.png")} alt="troll-face"/>
            <h1>Meme Generator</h1>
        </div>
            <h3>React Course - Project 3</h3>
    </div>
  );
}
