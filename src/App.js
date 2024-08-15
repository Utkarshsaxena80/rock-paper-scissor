import React,{useState} from 'react';
import './App.css';
const choices=["rock","paper","scissors"];
function App() {
  const [scoreMe,setScoreMe]=useState(0);
  const [scoreComp,setScoreComp]=useState(0);
  const[reset,setReset]=useState(0);
  const getResult=(userChoice,compChoice)=>{
    if(userChoice===compChoice){
      setScoreMe((scoreMe) => scoreMe + 1);
      setScoreComp((scoreComp) => scoreComp + 1);
      return "draw";
    }
    if(
      (userChoice==="rock"&& compChoice==="scissors")||
      (userChoice==="scissors"&&compChoice==="paper")||
      (userChoice==="paper"&&compChoice==="rock")||
       (userChoice==="rock"&&compChoice==="paper")
    ){
      setScoreMe((scoreMe ) => scoreMe  + 1);
      return "you win!";
    }
    setScoreComp((scoreComp) => scoreComp+ 1);
    return "you lose ";
  }
const [userChoice,setUserChoice]=useState("");//initial value null
const [compChoice,setCompChoice]=useState("");
const [result,setResult]=useState("");

const handleClick=(choice)=>{
  const randomChoice=choices[Math.floor(Math.random()*choices.length)];
  setUserChoice(choice);
  setCompChoice(randomChoice);
  setResult(getResult(choice,randomChoice));
  setReset(true);
}
 const handleReset=()=>{
  setScoreMe(0);
    setScoreComp(0);
    setUserChoice("");
    setCompChoice("");
    setResult("");
    setReset(false);
 }
return (
  <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div>
        {choices.map((choice) => (
          <button  key={choice} onClick={() => handleClick(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
      {reset && (// this means that if userChoice is true then only it will render

        <div>
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {compChoice}</p>
          <h2>{result}</h2>
          <h2>score</h2>
          <p>{scoreMe}</p>
          <p>{scoreComp}</p>
        </div>
      )}
    </div>
) 
}
export default App;
