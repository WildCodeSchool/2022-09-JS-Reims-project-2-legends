import "./App.css";
import React, { useState } from "react";
import ArenaPage from "./pages/ArenaPage";
import HomePage from "./pages/HomePage";

export default function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [activePage, setActivePage] = useState("home");

  const play = () => {
    setActivePage("play");
  };
  const surrender = () => {
    setActivePage("home");
  };
  return (
    <div className="App">
      {activePage === "home" && (
        <HomePage
          play={play}
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
        />
      )}
      {activePage === "play" && (
        <ArenaPage surrender={surrender} player1={player1} player2={player2} />
      )}
    </div>
  );
}
