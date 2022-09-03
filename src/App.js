import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Dictionary defaultKeyword="sunset" />{" "}
      <footer>
        Coded by{" "}
        <a href="https://github.com/SoleaMD/dictionary-project">
          SoleaMD
        </a>
      </footer>
    </div>
  );
}
