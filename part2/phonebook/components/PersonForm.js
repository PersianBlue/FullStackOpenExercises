import React from "react";
import db from "./services/services";

const PersonForm = ({
  newName,
  setNewName,
  newPhoneNum,
  setNewPhoneNum,
  persons,
  setPersons,
  setErrorMsg,
  setIsError,
}) => {
  const updateNumber = (person, newPhoneNum) => {
    const updatedPerson = { ...person, phoneNum: newPhoneNum };
    console.log("Updated person:", updatedPerson);
    db.update(person.id, updatedPerson)
      .then((returnedPerson) => {
        setPersons(
          persons.map((p) => (p.id !== person.id ? p : returnedPerson))
        );
        setIsError(false);
        setErrorMsg(`Updated phone number for ${returnedPerson.name} `);
        setTimeout(() => {
          setErrorMsg(null);
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        if (error.message.includes("404")) {
          setErrorMsg(`This contact has already been removed.`);
        } else {
          setErrorMsg("Error updating phone number");
        }
        setIsError(true);
        setTimeout(() => {
          setErrorMsg(null);
        }, 5000);
      });
  };

  const addNewPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.phoneNum === newPhoneNum)) {
      alert(`${newPhoneNum} is already in your phonebook `);
      return;
    }
    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson !== undefined) {
      window.confirm(
        `${newName} is already in your contacts. Replace the old number with this new one?`
      )
        ? updateNumber(existingPerson, newPhoneNum)
        : alert("No changes made.");
    }

    const newPerson = { name: newName, phoneNum: newPhoneNum };
    db.create(newPerson)
      .then((returnedPerson) => {
        const updatedPersons = [...persons, returnedPerson];
        setPersons(updatedPersons);
        setNewName("");
        setNewPhoneNum("");
        setIsError(false);
        setErrorMsg(`Added ${returnedPerson.name} `);
        setTimeout(() => {
          setErrorMsg(null);
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setErrorMsg("An error occured in adding this person to the database.");
        setTimeout(() => {
          setErrorMsg(null);
        }, 5000);
      });
  };
  return (
    <form>
      name:
      <input
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      phone number:
      <input
        value={newPhoneNum}
        onChange={(event) => setNewPhoneNum(event.target.value)}
      />
      <button type="submit" onClick={(event) => addNewPerson(event)}>
        add
      </button>
    </form>
  );
};

export default PersonForm;
