import React from "react";
import { CV } from "./MainCard";
import { useContext } from "react";
import { Grid } from "@mui/material";
import month from "./Forms/reference/monthRef";

export default function CVPDF() {
  const CVContext = useContext(CV);
  //CV template
  return (
    <div className="CVPDF">
      <div className="CVPDF-header">
        <h1>{CVContext.user.basicInfo.name}</h1>
        <span className="role-container">{CVContext.user.basicInfo.role}</span>
        <span className="address-container">
          {CVContext.user.basicInfo.address}
        </span>
      </div>

      <div className="contact-container">
        <div className="phone-container leftFloat">
          {CVContext.user.basicInfo.phone_number}
        </div>
        <div className="email-container rightFloat">
          {CVContext.user.basicInfo.email}
        </div>
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
          Date of Birth .....................................
          {CVContext.user.basicInfo.date_of_birth}
        </Grid>
        <Grid item xs={6}>
          Place Of Birth ..............................
          {CVContext.user.basicInfo.place_of_birth}
        </Grid>
        <Grid item xs={6}>
          Nationality .........................................
          {CVContext.user.basicInfo.nationality}
        </Grid>
        <Grid item xs={6}>
          Gender.....................................
          {CVContext.user.basicInfo.gender}
        </Grid>
      </Grid>

  
      <div>
        <br />
        <br />

        <div className="section-container">
          <h3 className="section-title">Education</h3>
        </div>

        {CVContext.user.educationExperience.map((education) => {
          return (
            <div className="expereince-container">
              <div>
              <span>
                <span className="job-title">{education.instituion_name}</span>
            
                <span className="job-duration">
                  {" "}
                  &nbsp;{
                    month[new Date(education.graduation_year).getMonth()]
                  }{" "}
                  {new Date(education.graduation_year).getFullYear()}
                </span>
              </span>
              </div>

              <div className="school-description" align="left">
                <p> &nbsp;,{education.degree_type}</p>
              </div>
              
              <hr />
            </div>
          );
        })}
      </div>

      <br />
      <br />

      <div>
        <div className="section-container">
          <h3 className="section-title">Experience</h3>
        </div>

        {CVContext.user.workExperinces.map((experience) => {
          return (
            <div className="expereince-container">
              <span>
                <span className="job-title">
                  {experience.title}, {experience.company_name}
                </span>

                <span className="job-duration">
                  {" "}
                  &nbsp;{month[new Date(experience.start_date).getMonth()]}{" "}
                  {new Date(experience.start_date).getFullYear()}-{" "}
                  {month[new Date(experience.end_date).getMonth()]}{" "}
                  {new Date(experience.end_date).getFullYear()}
                </span>
              </span>

              <div className="job-description">
                <p>{experience.description}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>

      <div className="section-container">
        <h3 className="section-title">Skills</h3>
      </div>
      <Grid container>
        {CVContext.user.skills.map((skill) => {
          return (
            <Grid item xs={2}>
              <div className="skills-container" align="center">
                <div className="skill-item">
                  <img src={skill.icon} width="30px" height="30px" />
                  <br />
                  <span className="skill-name">{skill.title}</span>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
