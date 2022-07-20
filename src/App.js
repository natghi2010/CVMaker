import { useEffect, useState } from "react";
import Person from "./components/Person";

function App() {

  const data = [
    {
      name:"Tsion",
      description:"This is about tsion"
    },
    {
      name:"Daniel",
      description:"This is about daniels"
    }
  ];

  const [people,setPeople] = useState(data);
  
  const deletePerson = index=>{
    console.log('Deleting ',index);
    var tempPeople = people;

    tempPeople =  tempPeople.splice(index,1);
    setPeople(tempPeople);

  }

  useEffect(()=>{},[]);


  return (
    <div className="App">

    {people.map((person,index)=>(
    <div key={index}>
      <Person name={person.name} description={person.description}/>
      <button onClick={()=>{deletePerson(index)}}>Delete</button>
      </div>
    ))}
    </div>
  );
}

export default App;
