import React, { useState } from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        <p>{text}</p>
      </td>
      <td>
        <p>{value}</p>
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  if (good === 0 && neutral === 0 && bad === 0 && total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"total"} value={total} />
          <StatisticLine
            text={"average"}
            value={total === 0 ? "N/A" : (good - bad) / total}
          />
          <StatisticLine
            text={"positive"}
            value={total === 0 ? "N/A" : (good * 100) / total + "%"}
          />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const updateFeedback = (type) => {
    if (type === "good") {
      setGood((good) => good + 1);
    } else if (type === "neutral") {
      setNeutral((neutral) => neutral + 1);
    } else if (type === "bad") {
      setBad((bad) => bad + 1);
    } else {
      return;
    }
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => updateFeedback("good")}>good</Button>
      <Button onClick={() => updateFeedback("neutral")}>neutral</Button>
      <Button onClick={() => updateFeedback("bad")}>bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
