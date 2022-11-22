import React, { useState } from "react";
import PropTypes from "prop-types";
import Draft from "../components/Draft/Draft";
import MiniCard from "../components/Global/MiniCard";

export default function DraftPage({ surrender }) {
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);

  return (
    <div className="flex flex-col h-screen">
      <div className="text-yellow-700 h-[20%] bg-black">
        <div className="grid grid-cols-6 h-[90%] w-full overflow-hidden">
          {playerTwoDeck.map((character) => (
            <MiniCard key={character.id} character={character} />
          ))}
        </div>
        <h1 className="text-center h-[10%]">Opponent Deck</h1>
      </div>

      <div className="Container flex items-center w-screen overflow-x-scroll h-full xl:justify-center xl:overflow-hidden gap-6">
        <button type="button" onClick={surrender}>
          Home
        </button>
        {playerOneDeck.length === 6 && playerTwoDeck.length === 6 ? (
          <p>combat</p>
        ) : (
          <Draft
            setPlayerOneDeck={setPlayerOneDeck}
            setPlayerTwoDeck={setPlayerTwoDeck}
          />
        )}
      </div>

      <section className="text-yellow-700 h-[20%] bg-black">
        <h1 className="text-center h-[10%]">My deck</h1>
        <div className="grid grid-cols-6 h-[90%]">
          {playerOneDeck.map((character) => (
            <MiniCard key={character.id} character={character} />
          ))}
        </div>
      </section>
    </div>
  );
}

DraftPage.propTypes = {
  surrender: PropTypes.func.isRequired,
};
