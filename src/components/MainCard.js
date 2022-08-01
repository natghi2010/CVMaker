import React, { createContext } from "react";
import FormContainer from "./FormContainer";
import Sidenav from "./Sidenav";
import Title from "./Title";

export const CV = createContext();

function MainCard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: 'Import Files',
      description: ``,
    },
    {
      label: 'Data Mapping',
      description:
        '',
    },
    {
      label: 'Entity mapping',
      description: ``,
    },
    {
      label: 'Summary',
      description: ``,
    },
  ];

  return (
    <div className="card">
      <Title title="Example Steps with UI" subtitle="Follow the simple 4 Steps to complete your mapping" />

      <CV.Provider value={{ 
        activeStep,
        handleBack,
        handleReset,
        handleNext,
        steps
       }}>
        <div className="cardBody">
          <Sidenav />
          <FormContainer />
       
        </div>
      </CV.Provider>
    </div>
  );
}

export default MainCard;
