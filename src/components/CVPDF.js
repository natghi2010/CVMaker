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
         Her Job
        </span>
        <span className="address-container">
        {CVContext.user.basicInfo.address}
        </span>
      </div>

      <div className="contact-container">
        <div className="phone-container leftFloat">{CVContext.user.basicInfo.phone_number}</div>
        <div className="email-container rightFloat">{CVContext.user.basicInfo.email}</div>
      </div>

      <hr/> 

      <Grid container sx={{
        mt:1
      }} spacing={2}>
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
        <h3 className="section-title">PROFILE</h3>
      </div>
      <div className="section-container">
        <h3 className="section-title">SKILLS</h3>
      </div>

      <Grid container sx={{
        mt:1
      }} spacing={2}>
        
          {CVContext.user.skills.map((skill,index) =>{
          return(
            <Grid item xs={6}>
            {CVContext.user.skills[index]}
            </Grid>
          );
        })}
      </Grid>
    


    </div>
  );
}
