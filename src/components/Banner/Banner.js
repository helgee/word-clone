import React from "react";

function Banner({ type, numGuesses, answer }) {
  return (
    <div className={`${type} banner`}>
      {type === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      ) : (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default Banner;
