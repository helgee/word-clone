import React from "react";
import { WORD_LENGTH } from "../../constants";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    addGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern={`[a-zA-Z]{${WORD_LENGTH},${WORD_LENGTH}}`}
        onChange={(evt) => setGuess(evt.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
