import { NextResponse } from "next/server";

export async function GET() {
  const myQuotes = [
    { id: 1, text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { id: 2, text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { id: 3, text: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.", author: "Waseem Latif" },
    { id: 4, text: "Computer science is no more about computers than astronomy is about telescopes.", author: "Edsger W. Dijkstra" },
    { id: 5, text: "It is not a bug. It is an undocumented feature.", author: "Anonymous" },
    { id: 6, text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { id: 7, text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { id: 8, text: "Code is like humor. If you have to explain it, it is bad.", author: "Cory House" },
    { id: 9, text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { id: 10, text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { id: 11, text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard" },
    { id: 12, text: "Debugging is twice as hard as writing the code in the first place.", author: "Brian Kernighan" },
    { id: 13, text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { id: 14, text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
    { id: 15, text: "Computers are good at following instructions, but not at reading your mind.", author: "Donald Knuth" },
    { id: 16, text: "Software is eating the world.", author: "Marc Andreessen" },
    { id: 17, text: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
    { id: 18, text: "If at first you don't succeed, call it version 1.0.", author: "Anonymous" },
    { id: 19, text: "There are only two hard things in Computer Science: cache invalidation and naming things.", author: "Phil Karlton" },
    { id: 20, text: "A language that doesn't affect the way you think about programming is not worth knowing.", author: "Alan Perlis" },
    { id: 21, text: "Testing leads to failure, and failure leads to understanding.", author: "Burt Rutan" },
    { id: 22, text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", author: "Christopher Thompson" },
    { id: 23, text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
    { id: 24, text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
    { id: 25, text: "Java is to JavaScript what car is to carpet.", author: "Chris Heilmann" }
  ];

  //Logix to choise one
  const randomI = Math.floor(Math.random() * myQuotes.length);
  const selectedQuote = myQuotes[randomI];

  //Return in Json
  return NextResponse.json(selectedQuote);
}