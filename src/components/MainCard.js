import React, { createContext } from "react";
import FormContainer from "./FormContainer";
import Sidenav from "./Sidenav";
import Title from "./Title";
import Footer from "./Footer";
import BasicInfo from "./Forms/BasicInfo";

export const CV = createContext();

function MainCard() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [user, setUser] = React.useState({
      basicInfo:{
        name:"Daniel",
        email:"natghi2010@gmail.com",
        phone_number:"(647) 555-5555",
      }
      
  });

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
      label: 'Basic Info',
      description: '',
    },
    {
      label: 'Education',
      description:
        '',
    },
    {
      label: 'Work Experience',
      description: ``,
    },
    {
      label: 'Skills',
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
        steps,
        user,
        setUser
       }}>
        <div className="cardBody">
          <Sidenav />
          <FormContainer />
          <Footer/>
        </div>
      </CV.Provider>
    </div>
  );
}

export default MainCard;
