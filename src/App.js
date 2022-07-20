import { useEffect, useState } from "react";
import Person from "./components/Person";

function App() {

  const data = [
    {
      name:"Tsion",
      description:"This is about tsion",
      age:17
    },
    {
      name:"Daniel",
      description:"This is about daniels",
      age:19
    }
  ];

  const [people,setPeople] = useState(data);
  
  const deletePerson = personToBeDeleted=>{
    console.log('Deleting ',personToBeDeleted);
    var tempPeople = people;

    tempPeople =  tempPeople.filter(person=>{
      return person !== personToBeDeleted
    })
    setPeople(tempPeople);

  }

  useEffect(()=>{},[]);


  return (
    <div className="App">

    {people.map((person,index)=>(
    <div key={index}>
      <Person name={person.name} description={person.description} age={person.age}/>
      <button onClick={()=>{deletePerson(person)}}>Delete</button>
      </div>
    ))}
    </div>
  );
  
}

export default App;
