import {useContext } from "react";
import { CV } from "./MainCard";

import forms from "./Forms/reference/formRef";


function FormContainer() {

  const CVContext = useContext(CV);
    return (
      <div className="formContainer">
         <h2>{CVContext.steps[CVContext.activeStep].label}</h2>
          {forms[CVContext.activeStep]()}
      </div>
    );
  }
  
  export default FormContainer;