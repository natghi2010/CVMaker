import {useContext } from "react";
import { CV } from "./MainCard";

import forms from "./Forms/reference/formRef";
import Footer from "./Footer";


function FormContainer() {

  const CVContext = useContext(CV);
    return (
      <div className="formContainer">
         <h2>{CVContext.steps[CVContext.activeStep].label}</h2>
          {forms[CVContext.activeStep]()}
          <Footer/>
      </div>
    );
  }


  
  
  export default FormContainer;