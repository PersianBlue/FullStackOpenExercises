import { useState } from "react";

const Total = (props) => {
  const [exercises1, exercises2, exercises3] = [
    props.parts[0].exercises,
    props.parts[1].exercises,
    props.parts[2].exercises,
  ];
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  console.log(props.parts);
  return (
    <>
      {props.parts.map((part) => {
        return (
          <Part
            name={part.name}
            exercises={part.exercises}
            key={part.id}
          ></Part>
        );
      })}
    </>
  );
};

const Part = (props) => {
  // console.log(part_name);
  // const part = props.part;
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};
const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
    console.log("Clicked x", counter);
  };

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <button onClick={handleClick}>Plus (+)</button>
    </div>
  );
};

export default App;
