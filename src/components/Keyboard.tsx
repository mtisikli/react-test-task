import React, { useState } from "react";
import "./Keyboard.css";

export const Keyboard = () => {
  const [letters] = useState([
    [
      { letter: "q" },
      { letter: "w" },
      { letter: "e" },
      { letter: "r" },
      { letter: "t" },
      { letter: "y" },
      { letter: "u" },
      { letter: "i" },
      { letter: "o" },
      { letter: "p" },
    ],
    [
      { type: "half" },
      { letter: "a" },
      { letter: "s" },
      { letter: "d" },
      { letter: "f" },
      { letter: "g" },
      { letter: "h" },
      { letter: "j" },
      { letter: "k" },
      { letter: "l" },
      { type: "half" },
    ],
    [
      { letter: "Enter" },
      { letter: "z" },
      { letter: "x" },
      { letter: "c" },
      { letter: "v" },
      { letter: "b" },
      { letter: "n" },
      { letter: "m" },
      { letter: "Delete" },
    ],
  ]);
  return (
    <div className="keyboard">
      {letters.map((row, i) => (
        <div className="row" key={i}>
          {row.map((letter, i) =>
            letter.type === "half" ? (
              <span className="half" key={i} />
            ) : (
              <span className="letter" key={i}>
                {letter.letter}
              </span>
            )
          )}
        </div>
      ))}
    </div>
  );
};
