"use client"; //client component
import next from "next";
import { use, useState } from "react"; //importamos esto para guardar los datos que cambian

const TEXT = "the quick brown from the crazy dog"; //texto a escribir por el jugador 

//Main component
export default function Home() {
  const [input, setInput] = useState(""); //lo que escribe el jugador
  const [startTime, setStartTime] = useState(null); //inicio
  const [endTime, setEndTime] = useState(null); //fin
  const arrWord = TEXT.split(" "); //Text separated on an array of words
  const [hasError, setHasError] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const time = startTime && endTime ? ((endTime - startTime) / 1000).toFixed(2) : null;

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

  return (
    <main>
      <h1>Practice your typing</h1>
      <h4>Click Star to have a quote disployed.Type the quote as fast as you can!</h4>
      <div>
        {arrWord.map((word, i) => {
          let color = "black";
          if (i < currentWordIndex) {
            color = "green";
          } else if (i === currentWordIndex) {
            color = hasError ? "red" : "blue";
          }
          return <span key={i} style={{ color, marginRight: 5 }}>{word}</span>
        })}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        disabled={currentWordIndex >= arrWord.length}
        />
      <button>Start</button>
      {time && <h2>time {time} segundos</h2>}
    </main>
  )
}