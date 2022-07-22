import { Component, useContext } from "react";
import { AppStateContext } from "../App";
import Person from "./Person";

export default function Layout() {
  const ContextData = useContext(AppStateContext);

  return (
    <div>
      <h1>People</h1>
      {ContextData.people.map((person,index) => {
        return (
         <>
          <Person
            key={person.index}
            name={person.name}
            description={person.description}
            age={person.age}
          />
          <button onClick={()=>ContextData.deletePerson(person)}>Delete</button>
         </>
        );
      })}
    </div>
  );
}
