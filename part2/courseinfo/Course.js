const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};
const Total = (props) => {
  const parts = props.parts;
  const callback = (accumulator, item) => {
    return accumulator + item.exercises;
  };

  const sum = parts.reduce(callback, 0);

  return <p>Number of exercises {sum}</p>;
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
export const Course = ({ course }) => {
  return (
    <>
      <Header course={course}></Header>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
