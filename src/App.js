<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import Layout from "./components/Layout";
import Person from "./components/Person";
=======
import { createContext, useContext, useEffect, useState } from "react";
import Layout from "./components/Layout";

export const AppStateContext = createContext();
>>>>>>> 5d938e32dca671921e957a5b2d8e1d7751ea560f

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


<<<<<<< HEAD
  return (
    <AppContext value={people}>
        <div>
          <Layout/>
        </div>
    </AppContext>
=======

  return (

    <AppStateContext.Provider value={{people,deletePerson}}>
    <div className="App">
     <p>Number : {people.length}</p>
     
      <Layout people ={people}/>
    
    </div>
    </AppStateContext.Provider>
>>>>>>> 5d938e32dca671921e957a5b2d8e1d7751ea560f
  );
  
}

export default App;
