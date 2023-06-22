import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const gameState =
    guesses.length > 0 &&
    guesses[guesses.length - 1]
      .map((part) => part.status)
      .every((status) => status === "correct")
      ? "happy"
      : guesses.length === NUM_OF_GUESSES_ALLOWED
      ? "sad"
      : "ongoing";

  function addGuess(guess) {
    setGuesses([...guesses, checkGuess(guess, answer)]);
  }
  return (
    <>
      <Guesses guesses={guesses} />
      {gameState !== "ongoing" && (
        <Banner type={gameState} numGuesses={guesses.length} answer={answer} />
      )}
      <GuessInput addGuess={addGuess} isDisabled={gameState === "sad"} />
    </>
  );
}

export default Game;
