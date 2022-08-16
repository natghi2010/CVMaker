import React from "react";
import { CV } from "./MainCard";
import { useContext } from "react";
import { Grid } from "@mui/material";

export default function CVPDF() {
  const CVContext = useContext(CV);
  //CV template
  return (
    <div className="CVPDF">
      <div className="CVPDF-header">
        <h1>{CVContext.user.basicInfo.name}</h1>
        <span className="role-container">
        {CVContext.user.basicInfo.role}
        </span>
        <span className="address-container">
        {CVContext.user.basicInfo.address}
        </span>
      </div>

      <div className="contact-container">
        <div className="phone-container leftFloat">{CVContext.user.basicInfo.phone_number}</div>
        <div className="email-container rightFloat">{CVContext.user.basicInfo.email}</div>
      </div>

      <hr />

      <Grid
        container
        sx={{
          mt: 1,
        }}
        spacing={2}
      >
        <Grid item xs={6}>
        Date of Birth .....................................{CVContext.user.basicInfo.date_of_birth}
        </Grid>
        <Grid item xs={6}>
        Place Of Birth ..............................{CVContext.user.basicInfo.place_of_birth}
        </Grid>
        <Grid item xs={6}>
        Nationality .........................................{CVContext.user.basicInfo.nationality}
        </Grid>
        <Grid item xs={6}>
        Gender.....................................{CVContext.user.basicInfo.gender}
        </Grid> 
      </Grid>


      <div className="section-container">
        <h3 className="section-title">Profile</h3>
      </div>
      <div>
        <div className="section-container">
          <h3 className="section-title">Education</h3>
        </div>



        {CVContext.user.educationExperience.map(education=>{
            return(
              <div className="expereince-container">
              
              <span>
                <span className="job-title">{education.instiution_name}</span>
    
                <span className="job-duration"> &nbsp;Oct 2015 - Jan 2017</span>
              </span>
            <span className="type-of-degree"> 
             <br/> 
             <i>Bacholors</i>
            </span>
            <hr/>
            </div>
            )
      })}

       


        </div>

  <br/><br/>

      <div>
        <div className="section-container">
          <h3 className="section-title">Experience</h3>
        </div>

        {CVContext.user.workExperinces.map(experince=>{
          return(
            <div className="expereince-container">
            <span>
              <span className="job-title">Job Title, Company</span>
  
              <span className="job-duration"> &nbsp;Oct 2015 - Jan 2017</span>
            </span>
  
            <div className="job-description">
              <p>
                Id exercitation labore eiusmod laboris enim laborum ipsum
                adipisicing irure aute ad eiusmod nostrud. Sit culpa proident
                aliquip magna aliqua consectetur deserunt laboris pariatur.
                Nostrud officia esse adipisicing irure nostrud Lorem anim dolor.
              </p>
            </div>
            <hr />
          </div>
          )
        })}
       


        </div>

        <div className="section-container">
          <h3 className="section-title">Skills</h3>
        </div>
        <Grid container>

        {CVContext.user.skills.map(skill=>{
          return(
           
            <Grid item xs={2}>
            <div className="skills-container" align="center">
            <div className="skill-item">
            <img src={skill.icon} width="30px" height="30px"/><br/>
              <span className="skill-name">{skill.title}</span>
            </div>
          </div>
          </Grid>
          

          )
        })}
       
        </Grid>
       
   
    </div>
  );
}
