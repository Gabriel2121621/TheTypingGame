"use client"; //client component
import next from "next";
import { use, useState } from "react"; //importamos esto para guardar los datos que cambian
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const TEXT = "the quick brown from the crazy dog"; //text to be written by the player 

//Main component
export default function Home() {
  const router = useRouter();
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
      const res = await fetch("/api/quotes");
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

  useEffect (() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        router.push("../leaderboard");
        }
      };
      window.addEventListener("keydown",handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
     }, [router]);

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
      {!isFinished ? (
        <main>
            
          <h5 className="navigationInfo">Press Tab to restart</h5>
          <h1 className="mainTitle">Practice your typing</h1>

          <div className="typing-text">
            {arrLetters.map((letter, i) => {
              let color = "#565F89";
              if (i < currentWordIndex) {
                //verify if its correct
                color = mistakes.includes(i) ? "#f7768e" : "#9ECE6A" ;
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
        </main>
      ) : (
        <div style={{ marginTop: "5px" }}>
            <h1 className="results">Result: {time} seconds</h1>
            <h2 className="accuracy" >Accuracy: {(((arrLetters.length - mistakes.length) / arrLetters.length) * 100).toFixed(0)}%</h2>
            <input>Give your name</input>
        </div>
      )}
    </main>
  )
}