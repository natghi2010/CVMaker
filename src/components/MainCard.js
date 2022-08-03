import React, { createContext } from "react";
import FormContainer from "./FormContainer";
import Sidenav from "./Sidenav";
import Title from "./Title";
import Footer from "./Footer";

export const CV = createContext();

function MainCard() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [user, setUser] = React.useState({
      basicInfo:{
        name:"Daniel",
        address: "18",
        email:"natghi2010@gmail.com",
        phone_number:"(647) 555-5555",
      },
     workExperinces: [
        {
          company_name:"TestPick",
          title : "Developer",
          description : "",
          start_date : "12/05/2021",
          end_date:"14/05/2021"
        },
        {
          company_name:"Sunchips",
          title : "Developer",
          description : "",
          start_date : "12/05/2021",
          end_date:"14/05/2021"
        }
      ]
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
