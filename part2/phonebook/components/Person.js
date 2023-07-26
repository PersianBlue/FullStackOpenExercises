import React from "react";

const Person = ({ person, handleDelete }) => {
  return (
    <p>
      {person.name} {person.phoneNum}
      <button onClick={() => handleDelete(person)}>delete </button>
    </p>
  );
};

export default Person;
