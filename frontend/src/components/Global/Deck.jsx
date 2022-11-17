import React from "react";
import PropTypes from "prop-types";
import MiniCard from "./MiniCard";
import { cardArrayPropTypes } from "../../propTypes";

function Deck({ deck, position, setPlayerCardPicked, validPlayerSelection }) {
  return (
    <div className="text-yellow-700 h-[20%] xl:w-1/2">
      {position === "bot" && <h2 className="text-center h-[10%]">My deck</h2>}
      <div className="grid grid-cols-6 h-[90%] w-full">
        {deck.map((deckCard) => (
          <MiniCard
            dataDeck={deckCard}
            key={deckCard.id}
            position={position}
            selectCardToPlay={() => {
              setPlayerCardPicked(deckCard);
            }}
            validPlayerSelection={validPlayerSelection}
          />
        ))}
      </div>
      {position === "top" && (
        <h2 className="text-center h-[10%]">Opponent Deck</h2>
      )}
    </div>
  );
}

Deck.propTypes = {
  deck: cardArrayPropTypes.isRequired,
  position: PropTypes.string.isRequired,
  setPlayerCardPicked: PropTypes.func.isRequired,
  validPlayerSelection: PropTypes.bool.isRequired,
};

export default Deck;
