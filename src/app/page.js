"use client"; //client component
import next from "next";
import { use, useState } from "react"; //importamos esto para guardar los datos que cambian
import { useEffect, useRef } from "react";

const TEXT = "the quick brown from the crazy dog"; //text to be written by the player 
//Main component
export default function Home() {
  const [input, setInput] = useState(""); //its written by the player
  const [startTime, setStartTime] = useState(null); //begining
  const [endTime, setEndTime] = useState(null); //end
  const [hasError, setHasError] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const arrWord = TEXT.split(" "); //Text separated on an array of words
  const time = startTime && endTime ? ((endTime - startTime) / 1000).toFixed(2) : null;
  const inputRef = useRef(null);

  function handleChange(e) {
    if(!startTime) {
      setStartTime(Date.now()); //inicializar el contador 
    }
    const value = e.target.value;

    if(value.endsWith(" ")) {
      const typedWord = value.trim(); //removes the space

      if (typedWord !== arrWord[currentWordIndex]) {
        setHasError(true); //the word its not correctly writen

      }else{
        const nextIndex = currentWordIndex + 1;
        setCurrentWordIndex(nextIndex);
        setHasError(false);

        if(nextIndex >= arrWord.length) {
        setEndTime(Date.now());
        console.log("nextIndex",nextIndex);
        console.log(arrWord.length)
      }
      }
      setInput(""); //Limpia el input

    }else{
      setInput(value); //It does the same again with the next word
    }
  }

  function resetGame() {
    setCurrentWordIndex(0);
    setInput("");
    setHasError(false);
    setEndTime(null);
    setStartTime(null);
    //autofocus on the input
        setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Tab") {
        e.preventDefault();
        resetGame();
        
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown",handleKeyDown);
    };
  }, []);
  return (
    <main>
      <h5>Press Tab to restart</h5>
      <h1>Practice your typing</h1>
      {/* <h3 className="second">Type the quote as fast as you can!</h3>  */}
      <div className="typing-text">
        {arrWord.map((word, i) => {
          let color = "#545463";
          if (i < currentWordIndex) {
            color = "#629677";
          } else if (i === currentWordIndex) {
            color = hasError ? "#893F45" : "#FFBF00";
          }
          return <span key={i} style={{ color, }}>
                      {word}
                      {i === currentWordIndex && <span className="cursor" />}{" "}
                      </span>
        })}
      </div>
      <div className="input-container">
        <input
          type="text"
          ref={inputRef} 
          value={input}
          onChange={handleChange}
          disabled={currentWordIndex >= arrWord.length}
          />
        </div>
      {time && <h2>time {time} segundos</h2>}
    </main>
  )
}