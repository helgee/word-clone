import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess
        ? guess.map((part, idx) => (
            <span key={idx} className={`cell ${part.status}`}>
              {part.letter}
            </span>
          ))
        : range(WORD_LENGTH).map((idx) => <span key={idx} className="cell" />)}
    </p>
  );
}

export default Guess;
