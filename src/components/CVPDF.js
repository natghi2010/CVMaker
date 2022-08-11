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
        <span className="role-container">Her Job</span>
        <span className="address-container">address</span>
      </div>

      <div className="contact-container">
        <div className="phone-container leftFloat">09472364827</div>
        <div className="email-container rightFloat">tse@test.com</div>
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
          Date of Birth .....................................04/04/2022
        </Grid>

        <Grid item xs={6}>
          Place of Birth ..............................Addis Ababa
        </Grid>

        <Grid item xs={6}>
        Nationality .....................................Ethiopia
        </Grid>

        <Grid item xs={6}>
          Gender ............................................ &nbsp;Male
        </Grid>
      </Grid>

      <div className="section-container">
        <h3 className="section-title">Profile</h3>
      </div>
      <div>
        <div className="section-container">
          <h3 className="section-title">Education</h3>
        </div>

        <div className="expereince-container">
          <span>
            <span className="job-title">Insitution</span>

            <span className="job-duration"> &nbsp;Oct 2015 - Jan 2017</span>
          </span>
        <span className="type-of-degree"> 
         <br/> 
         <i>Bacholors</i>
        </span>
        
        </div>
        </div>

  <br/><br/>

      <div>
        <div className="section-container">
          <h3 className="section-title">Experience</h3>
        </div>

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
        </div>

        <div className="section-container">
          <h3 className="section-title">Skills</h3>
        </div>

        <div className="skills-container">
          <div className="skill-item">
            <span className="skill-name">Skill Name</span>
          </div>
        </div>
   
    </div>
  );
}
