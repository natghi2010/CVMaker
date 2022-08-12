import React, { createContext, useRef,useEffect } from "react";
import FormContainer from "./FormContainer";
import Sidenav from "./Sidenav";
import Title from "./Title";
import CVPDF from "./CVPDF";
import Footer from "./Footer";
import educationTypes from "./Forms/reference/educationTypeRef";
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import { Button } from "@mui/material";

export const CV = createContext();

function MainCard() {
  
  const [activeStep, setActiveStep] = React.useState(2);

 
  var userModel = window.localStorage.getItem("user")!= null ? JSON.parse(window.localStorage.getItem("user")) : {
    basicInfo: {
      name: "John Doe",
      date_of_birth: "22/05/1995",
      place_of_birth: "Addis Ababa",
      gender:"Male",
      nationality: "Ethiopian",
      address: "Bole,Addis Ababa",
      role:"Engineer",
      email: "engineer@gmail.com",
      phone_number: "+251947001077",
    },
    educationExperience:[
      {
        institution_type: 'High School',
        instituion_name : 'Lancaster University',
        graduation_year : '2000',
        degree_type : 'Diploma',
      },
      
    ],
  
    workExperinces: [
      {
        company_name: "",
        title: "",
        description: "",
        start_date: "",
        end_date: "",
      },
    ],
    skills:[]
    
  };



 
  const [user, setUser] = React.useState(userModel);

  const addEducation = () => {
    setUser({
      ...user,
      educationExperience: [
        ...user.educationExperience,
        {
          institution_type: "",
          instituion_name: "",
          graduation_year: "",
          degree_type: "",
        },
      ],
    })
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

   useEffect(() => {
    window.localStorage.clear();
    window.localStorage.setItem("user", JSON.stringify(user));
  },[user]);




  const removeEducation = (index) => {
    setUser({
      ...user,
      educationExperience: user.educationExperience.filter((_, i) => i !== index),
    });

  }

  const addWorkExperience = () => {
    setUser({
      ...user,
      workExperinces: [
        ...user.workExperinces,
        {
          company_name: "",
          title: "",
          description: "",
          start_date: "",
          end_date: "",
        },
      ],
    });
  }

    const removeWorkExperience = (index) => {
      setUser({
        ...user,
        workExperinces: user.workExperinces.filter((_, i) => i !== index),
      });
    }
    

  const handleNext = () => {
    if(activeStep === steps.length - 1){
      handlePrint();
      return;
    }
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
      label: "Basic Info",
      description: "",
    },
    {
      label: "Education",
      description: "",
    },
    {
      label: "Work Experience",
      description: ``,
    },
    {
      label: "Skills",
      description: ``,
    },
  ];

  return (
    <div className="card">
      <Title
     
        title="CVMaker"
        subtitle="Follow the simple 4 Steps to complete your CV"
      />

      <CV.Provider
        value={{
          activeStep,
          handleBack,
          handleReset,
          handleNext,
          steps,
          user,
          setUser,
          educationTypes,
          addEducation,
          removeEducation,
          addWorkExperience,
          removeWorkExperience,
          handlePrint,
        }}
      >
        <div className="cardBody">
          <Sidenav />
          <FormContainer />
        </div>

       
        <div ref={componentRef}>
          {<CVPDF />}
        </div>

      </CV.Provider>
    </div>
  );
}

export default MainCard;
