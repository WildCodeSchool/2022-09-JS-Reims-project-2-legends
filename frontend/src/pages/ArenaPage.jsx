import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Fight from "../components/Fight/Fight";
import Draft from "../components/Draft/Draft";
import MiniCard from "../components/Global/MiniCard";
import "./ArenaPage.css";

export default function DraftPage({ surrender, player1, player2 }) {
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);
  const [playerOneCard, setPlayerOneCard] = useState();
  const [playerTwoCard, setPlayerTwoCard] = useState();
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [decksReady, setDecksReady] = useState(false);
  const [winner, setWinner] = useState();
  const [frozen, setFrozen] = useState(false);

  useEffect(() => {
    if (playerOneDeck.length === 6 && playerTwoDeck.length === 6) {
      setDecksReady(true);
    }
  }, [playerOneDeck, playerTwoDeck]);

  return (
    <div className="flex flex-col h-screen">
      <div className="deck">
        <div className="cards">
          {playerTwoDeck.map((character) => (
            <MiniCard
              key={character.id}
              character={character}
              selectCardToPlay={
                decksReady && !frozen
                  ? () => {
                      const newPlayerTwoDeck = playerTwoDeck.filter(
                        (cardInDeck) => cardInDeck.id !== character.id
                      );

                      if (playerTwoCard) {
                        newPlayerTwoDeck.push(playerTwoCard);
                      }

                      setPlayerTwoDeck(newPlayerTwoDeck);
                      setPlayerTwoCard(character);
                    }
                  : null
              }
            />
          ))}
        </div>
        <h1 className="player-name text-center">{player2}</h1>
      </div>
      {winner && <h1 className="winner">Winner: {winner}</h1>}

      <div className="Container flex items-center w-screen overflow-x-scroll h-full xl:justify-center xl:ove+hidden gap-6">
        <button className="home-btn" type="button" onClick={surrender}>
          Home
        </button>

        {decksReady ? (
          <>
            <p className="score">
              {player1} :{playerOneScore}
            </p>
            <Fight
              playerOneCard={playerOneCard}
              playerTwoCard={playerTwoCard}
              setFrozen={(newFrozen) => {
                if (newFrozen === false) {
                  // vider la table
                  setPlayerOneCard();
                  setPlayerTwoCard();
                }
                setFrozen(newFrozen);
              }}
              nextRound={() => {
                if (playerOneDeck.length === 0 && playerTwoDeck.length === 0) {
                  if (playerOneScore > playerTwoScore) {
                    setWinner(player1);
                  } else if (playerOneScore < playerTwoScore) {
                    setWinner(player2);
                  } else {
                    setWinner("Draw");
                  }
                }
              }}
              setPlayerOneScore={setPlayerOneScore}
              setPlayerTwoScore={setPlayerTwoScore}
            />
            <p className="score">
              {`
              ${player2}
              ${playerTwoScore}
            `}
            </p>
          </>
        ) : (
          <Draft
            setPlayerOneDeck={setPlayerOneDeck}
            setPlayerTwoDeck={setPlayerTwoDeck}
          />
        )}
      </div>

      <section className="deck">
        <h1 className="player-name text-center">{player1}</h1>
        <div className="cards">
          {playerOneDeck.map((character) => (
            <MiniCard
              key={character.id}
              character={character}
              selectCardToPlay={
                decksReady && !frozen
                  ? () => {
                      const newPlayerOneDeck = playerOneDeck.filter(
                        (cardInDeck) => cardInDeck.id !== character.id
                      );

                      if (playerOneCard) {
                        newPlayerOneDeck.push(playerOneCard);
                      }

                      setPlayerOneDeck(newPlayerOneDeck);
                      setPlayerOneCard(character);
                    }
                  : null
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}

DraftPage.propTypes = {
  surrender: PropTypes.func.isRequired,
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
};
