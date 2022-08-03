import { Component, useContext } from "react";
import Education from "./Forms/Education";
import { CV } from "./MainCard";


function FormContainer() {

  const CVContext = useContext(CV);

  console.log(CVContext);
    return (
      <div className="formContainer">
         <h2>{CVContext.steps[CVContext.activeStep].label}</h2>
         <Education/>
      </div>
    );
  }
  
  export default FormContainer;