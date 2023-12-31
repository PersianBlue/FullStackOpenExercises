import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  });

  const addVote = (number) => {
    const obj = { ...votes };
    obj.hasOwnProperty(number) ? (obj[number] += 1) : (obj[number] = 1);
    setVotes(obj);
  };
  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    console.log(randomNumber);
    setSelected(randomNumber);
  };
  const findBestAnecdote = () => {
    let max = 0;
    let best = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > max) {
        max = votes[i];
        best = i;
      }
    }
    console.log(max, best);
    return best;
  };
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes</p>
      <button onClick={() => getRandomNumber()}>Next anecdote</button>
      <button onClick={() => addVote(selected)}>Vote </button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[findBestAnecdote()]}</p>
    </div>
  );
};

export default App;
