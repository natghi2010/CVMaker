import { useContext, useEffect, useState } from "react";
import Layout from "./components/Layout";
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
    <AppContext value={people}>
        <div>
          <Layout/>
        </div>
    </AppContext>
  );
  
}

export default App;
