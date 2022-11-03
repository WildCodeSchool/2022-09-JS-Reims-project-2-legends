import React from "react";
import PropTypes from "prop-types";
import MiniCard from "../Global/MiniCard";
// import Card from "../Global/Card";

export default function CombatMode({ cardSelected, cardComputer }) {
  const deckCardsComputer = cardComputer;
  const deckCardsPlayer = cardSelected;
  //   const [playedCard, setPlayedCard] = useState({});
  //   const [playedCardComputer, setPlayedCardComputer] = useState({});
  return (
    <div className="flex flex-col h-screen">
      <div className="text-yellow-700 h-[20%] bg-black">
        <div className="grid grid-cols-6 h-[90%] w-full overflow-hidden">
          {deckCardsComputer.map((deckCard) => (
            <MiniCard dataDeck={deckCard} key={deckCard.id} />
          ))}
        </div>
        <h2 className="text-center h-[10%]">Opponent Deck</h2>
      </div>
      <div className="font-xl h-[60%] w-screen text-yellow-800 flex flex-col items-center">
        WELCOME TO THE COMBAT MODE !!!!!
        <div className="flex-1 grid grid-cols-3">
          <div />
          <span className="h-full w-full flex justify-center items-center">
            {" "}
            <h1 className="text-yellow-700 text-3xl -rotate-45">VERSUS</h1>
          </span>

          <div>{/* <Card playedCard={playedCard}></Card> */}</div>
        </div>
      </div>
      <div className="text-yellow-700 h-[20%] bg-black">
        <h2 className="text-center h-[10%]">My deck</h2>
        <div className="grid grid-cols-6 h-[90%]">
          {deckCardsPlayer.map((deckCard) => (
            <MiniCard
              dataDeck={deckCard}
              key={deckCard.id}
              selectCardToPlay={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

CombatMode.propTypes = {
  cardSelected: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape))
    .isRequired,
  cardComputer: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape))
    .isRequired,
};
