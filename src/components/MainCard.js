import { createContext } from "react";
import FormContainer from "./FormContainer";
import Sidenav from "./Sidenav";
import Title from "./Title";
export const CV = createContext();

function MainCard() {
  return (
    <div className="card">
      <Title title="Title" subtitle="Subtitle" />

      <CV.Provider value={{ test: "test" }}>
        <div className="cardBody">
          <Sidenav />
          <FormContainer />
       
        </div>
      </CV.Provider>
    </div>
  );
}

export default MainCard;
