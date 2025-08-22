import language from "../languages.js";
import words from "../words.js";
import { useState } from "react";
export default function Test() {
  const number = Math.floor(Math.random() * words.length);
  console.log(number);
  const [guess, setGuess] = useState(words[number]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [guessed, setGuessed] = useState([]);
  console.log(guessed);
  const lang = language.map((lang, index) => {
    const style = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span style={style} key={index}>
        {lang.name}
      </span>
    );
  });

  const correct = guessed.filter((letter) => guess.includes(letter));
  const wrong = guessed.filter((letter) => !guess.includes(letter));
  console.log(correct);
  console.log(wrong);
  const correctlength = correct.length;
  console.log(correctlength);
  const wronglength = wrong.length;
  console.log(wronglength);
  const addGuessed = (letter) => {
    setGuessed((prev) => (prev.includes(letter) ? prev : [...prev, letter]));
  };
  const keyboard = alphabet.split("").map((letter, index) => {
    return (
      <button
        key={index}
        style={{ border: "black solid 2px", margin: "1px" }}
        onClick={() => addGuessed(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
  const displayWord = guess
    .split("")
    .map((letter) => (guessed.includes(letter) ? letter : "_"))
    .join(" ");
  console.log(displayWord);
  return (
    <div>
      <h1>{displayWord}</h1>
      <h1>{guess}</h1>
      <h1>{lang}</h1>
      <h1>{keyboard}</h1>
      <h1>{!displayWord.includes("_") && <h1>Won!</h1>}</h1>
      <h1>{wronglength === 7 && <h1>Lost!</h1>}</h1>
    </div>
  );
}
