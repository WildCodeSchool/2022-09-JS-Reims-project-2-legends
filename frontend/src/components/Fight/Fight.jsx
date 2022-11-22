import React from "react";
import CardProps from "../../prop-types/CardProps";
import Card from "../Global/Card";

export default function Fight({ playerOneCard, playerTwoCard }) {
  return (
    <>
      {playerOneCard && <Card character={playerOneCard} />}
      <button type="button">Validate</button>
      {playerTwoCard && <Card character={playerTwoCard} />}
    </>
  );
}

Fight.propTypes = {
  playerOneCard: CardProps,
  playerTwoCard: CardProps,
};

Fight.defaultProps = {
  playerOneCard: null,
  playerTwoCard: null,
};
