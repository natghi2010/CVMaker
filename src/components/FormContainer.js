import { useContext } from "react";
import { CV } from "./MainCard";

function FormContainer() {

  const CVContext = useContext(CV);

    return (
      <div className="formContainer">
         <h2>{CVContext.steps[CVContext.activeStep].label}</h2>
         
      </div>
    );
  }
  
  export default FormContainer;