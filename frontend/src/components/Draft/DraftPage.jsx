import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Loader from "./Loader";
import PlayersSelection from "./PlayersSelection";

export default function DraftPage({ setActivePage }) {
  const [draftRound, setDraftRound] = useState(1);

  const [characters, setCharacters] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const API_KEY = "4070424506516370";
  const [validIds, setValidIds] = useState(
    [
      644, 720, 306, 491, 165, 156, 267, 542, 405, 370, 284, 601, 309, 522, 731,
      105, 609, 346, 659, 332, 620, 149, 717, 106, 498, 273, 430, 414, 401, 687,
      550, 570, 472, 655, 278, 708, 136, 230, 457, 70, 38, 95, 31, 93,
    ].sort(() => Math.random() - 0.5)
  );

  const fetchData = () => {
    const promises = validIds
      .slice(draftRound * 3, (draftRound + 1) * 3)
      .map((id) =>
        axios.get(`https://www.superheroapi.com/api.php/${API_KEY}/${id}`)
      );

    Promise.all(promises).then((responses) => {
      setCharacters(responses.map((response) => response.data));
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, [draftRound]);

  if (draftRound === 5) {
    setActivePage("combatpage");
  }
  return isLoading ? (
    <Loader />
  ) : (
    <PlayersSelection
      characters={characters}
      setCharacters={setCharacters}
      draftRound={draftRound}
      setDraftRound={setDraftRound}
      setValidIds={setValidIds}
    />
  );
}

DraftPage.propTypes = {
  setActivePage: PropTypes.func.isRequired,
};