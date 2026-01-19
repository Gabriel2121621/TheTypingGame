"use client"; //client component
import next from "next";
import { use, useState } from "react"; //importamos esto para guardar los datos que cambian
import { useEffect, useRef } from "react";

const TEXT = "the quick brown from the crazy dog"; //text to be written by the player 

//Main component
export default function Home() {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mistakes,setMistakes] = useState([]);
  const [text,setText] = useState("");
  const [isLoading,setIsLoading] = useState(true);

  const inputRef = useRef(null);

  const arrLetters = text.split(""); //Text separated on an array of words
  const time = startTime && endTime ? ((endTime - startTime) / 1000).toFixed(2) : null;
  const isFinished = currentWordIndex === arrLetters.length;

  const fetchQuote = async () => {
    setIsLoading(true);
    try{
      const res = await fetch("/Api/quotes");
      const data = await res.json();
      setText(data.text.toLowerCase());
    }catch(e){
      setText("say my name");
    }
    setIsLoading(false);
  };


  function handleChange(e) {
    const typedChar = e.target.value;
    const expectedChar = arrLetters[currentWordIndex];
    
    if(!startTime) {
      setStartTime(Date.now()); 
    }

    if (typedChar === expectedChar) {
      setCurrentWordIndex((prev) => prev +1)

    }else{
      setMistakes((prev) => [...prev, currentWordIndex])
      setCurrentWordIndex((prev) => prev +1)
    }

    //check if the game its over
    if (currentWordIndex +1 === arrLetters.length) {
      setEndTime(Date.now());
    }
    setInput("");
  }

  function resetGame() {
    setCurrentWordIndex(0);
    setInput("");
    setHasError(false);
    setMistakes([]);
    setEndTime(null);
    setStartTime(null);
    //autofocus on the input
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
    fetchQuote();
  }

  useEffect(() => {
    fetchQuote();
  }, []);

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
  }, [text]);

  useEffect(() => {
      if (!isLoading && !isFinished) {
        inputRef.current?.focus();
      }
    }, [isLoading, currentWordIndex, isFinished]);

    if (isLoading) {
      return <main className="loading"><h1>Charging Sentence...</h1></main>;
      console.log(text);

    }

  return (
    <main>
      <h5>Press Tab to restart</h5>
      <h1>Practice your typing</h1>

      <div className="typing-text">
        {arrLetters.map((letter, i) => {
          let color = "#545463";
          if (i < currentWordIndex) {
            //verify if its correct
            color = mistakes.includes(i) ? "#893F45" : "#629677" ;
          } else if (i === currentWordIndex) {
            //its the current letter
            color = "#FFBF00";
          }
          
          return <span key={i} style={{ color }}>
                      {i === currentWordIndex && <span className="cursor" />}
                      {letter === " " ? "\u00A0" : letter}
                      </span>
        })}
      </div>

      <div className="input-container">
        <input
          type="text"
          ref={inputRef} 
          value={input}
          onChange={handleChange}
          disabled={currentWordIndex >= arrLetters.length}
          autoComplete="off"
          autoFocus
          />
      </div>

        {isFinished && (
          <div style={{ marginTop: "5px" }}>
            <h2>Result: {time} seconds</h2>
            <p className="accuracy" >Accuracy: {(((arrLetters.length - mistakes.length) / arrLetters.length) * 100).toFixed(0)}%</p>
          </div>
        )}
    </main>
  )
}