import React, { useState } from "react";
import PropTypes from "prop-types";
import CardProps from "../../prop-types/CardProps";
import Card from "../Global/Card";
import "./Fight.css";

export default function Fight({
  playerOneCard,
  playerTwoCard,
  setPlayerOneScore,
  setPlayerTwoScore,
  setFrozen,
  nextRound,
}) {
  const [wantedStat, setWantedStat] = useState();

  return (
    <>
      {playerOneCard && <Card character={playerOneCard} />}
      {wantedStat ? (
        <>
          <p className="stats">{wantedStat.toUpperCase()}</p>
          <button
            className="next-btn"
            type="button"
            onClick={() => {
              setFrozen(false);
              setWantedStat();
              nextRound();
            }}
          >
            Next
          </button>
        </>
      ) : (
        <button
          className="validate-btn"
          type="button"
          onClick={() => {
            // si playerOneCard et playerTwoCard sont définis
            if (playerOneCard && playerTwoCard) {
              // sélectionne une stat au hasard
              const stats = [
                "intelligence",
                "speed",
                "combat",
                "strength",
                "power",
                "durability",
              ];

              const newWantedStat =
                stats[Math.floor(Math.random() * stats.length)];

              if (
                parseInt(playerOneCard.powerstats[newWantedStat], 10) <
                parseInt(playerTwoCard.powerstats[newWantedStat], 10)
              ) {
                setPlayerTwoScore((playerTwoScore) => playerTwoScore + 1);
              } else if (
                parseInt(playerOneCard.powerstats[newWantedStat], 10) >
                parseInt(playerTwoCard.powerstats[newWantedStat], 10)
              ) {
                setPlayerOneScore((playerOneScore) => playerOneScore + 1);
              }

              setWantedStat(newWantedStat);
              setFrozen(true);
            }
          }}
        >
          Validate
        </button>
      )}
      {playerTwoCard && <Card character={playerTwoCard} />}
    </>
  );
}

Fight.propTypes = {
  playerOneCard: CardProps,
  playerTwoCard: CardProps,
  setFrozen: PropTypes.func.isRequired,
  nextRound: PropTypes.func.isRequired,
  setPlayerOneScore: PropTypes.func.isRequired,
  setPlayerTwoScore: PropTypes.func.isRequired,
};

Fight.defaultProps = {
  playerOneCard: null,
  playerTwoCard: null,
};
