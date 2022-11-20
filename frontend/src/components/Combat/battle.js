export default function battle(
  validPlayerOneSelection,
  validPlayerTwoSelection,
  stat,
  playerOneCardPicked,
  playerTwoCardPicked,
  setscorePlayerOne,
  setscorePlayerTwo,
  setPlayerOneCardPicked,
  setPlayerTwoCardPicked,
  setValidPlayerOneSelection,
  setValidPlayerTwoSelection
) {
  if (validPlayerOneSelection === false && validPlayerTwoSelection === false) {
    setTimeout(() => {
      const playerOneStat = parseInt(playerOneCardPicked.powerstats[stat], 10);
      const playerTwoStat = parseInt(playerTwoCardPicked.powerstats[stat], 10);
      if (playerOneStat > playerTwoStat) {
        setscorePlayerOne((old) => old + 1);
      } else if (playerOneStat < playerTwoStat) {
        setscorePlayerTwo((old) => old + 1);
      }

      setPlayerOneCardPicked(null);
      setPlayerTwoCardPicked(null);
      setValidPlayerOneSelection(true);
      setValidPlayerTwoSelection(true);
    }, 2000);
  }
}
