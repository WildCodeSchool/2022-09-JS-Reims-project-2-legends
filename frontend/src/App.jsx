import "./App.css";
import React, { useState } from "react";
import DraftPage from "./components/Draft/DraftPage";
import HomePage from "./components/Homepage/Homepage";

export default function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [activePage, setActivePage] = useState("homepage");

  const play = () => {
    setActivePage("draftPage");
  };
  return (
    <div className="App">
      {activePage === "homepage" && (
        <HomePage
          play={play}
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
        />
      )}
      {activePage === "draftPage" && (
        <DraftPage
          setActivePage={setActivePage}
          player1={player1}
          player2={player2}
        />
      )}
    </div>
  );
}
