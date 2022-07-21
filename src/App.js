import { createContext, useContext, useEffect, useState } from "react";
import Layout from "./components/Layout";

export const AppStateContext = createContext();

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

    <AppStateContext.Provider value={{people,deletePerson}}>
    <div className="App">
     <p>Number : {people.length}</p>
     
      <Layout people ={people}/>
    
    </div>
    </AppStateContext.Provider>
  );
  
}

export default App;
