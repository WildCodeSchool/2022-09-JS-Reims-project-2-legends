import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Global/Card";
import MiniCard from "../Global/MiniCard";

export default function PlayersSelection({
  characters,
  setCharacters,
  draftRound,
  setDraftRound,
  setValidIds,
}) {
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);

  return (
    <div className="flex flex-col h-screen">
      <div className="text-yellow-700 h-[20%] bg-black">
        <div className="grid grid-cols-6 h-[90%] w-full overflow-hidden">
          {playerTwoDeck.map((el) => (
            <MiniCard dataDeck={el} />
          ))}
        </div>
        <h1 className="text-center h-[10%]">Opponent Deck</h1>
      </div>

      <div className="Container flex items-center w-screen overflow-x-scroll h-full xl:justify-center xl:overflow-hidden gap-6">
        {characters.map((character) => (
          <Card
            draftRound={draftRound}
            key={character.id}
            character={character}
            select={() => {
              const addSelectedCard = (oldValues) => [...oldValues, character];
              const addOtherCards = (oldValues) => [
                ...oldValues,
                ...characters.filter(
                  (otherCharacter) => otherCharacter.id !== character.id
                ),
              ];

              if (draftRound % 2 === 0) {
                setPlayerTwoDeck(addSelectedCard);
                setPlayerOneDeck(addOtherCards);
              } else {
                setPlayerOneDeck(addSelectedCard);
                setPlayerTwoDeck(addOtherCards);
              }

              setValidIds((oldValues) => oldValues.slice(3));
              setCharacters([]);
              setDraftRound(() => draftRound + 1);
            }}
          />
        ))}
      </div>
      <section className="text-yellow-700 h-[20%] bg-black">
        <h1 className="text-center h-[10%]">My deck</h1>
        <div className="grid grid-cols-6 h-[90%]">
          {playerOneDeck.map((el) => (
            <MiniCard dataDeck={el} />
          ))}
        </div>
      </section>
    </div>
  );
}

PlayersSelection.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      powerstats: PropTypes.shape({
        intelligence: PropTypes.string,
        strength: PropTypes.string,
        speed: PropTypes.string,
        durability: PropTypes.string,
        power: PropTypes.string,
        combat: PropTypes.string,
      }),
      image: PropTypes.shape({ url: PropTypes.string }),
    })
  ).isRequired,
  setCharacters: PropTypes.func.isRequired,
  draftRound: PropTypes.number.isRequired,
  setDraftRound: PropTypes.func.isRequired,
  setValidIds: PropTypes.func.isRequired,
};
