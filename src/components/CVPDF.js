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
          address
        </span>
      </div>

      <div className="contact-container">
        <div className="phone-container leftFloat">09472364827</div>
        <div className="email-container rightFloat">tse@test.com</div>
      </div>

      <hr/> 

      <Grid container sx={{
        mt:1
      }} spacing={2}>
        <Grid item xs={6}>
        Date of Birth .....................................04/04/2022
        </Grid>

        <Grid item xs={6}>
        Place of Birth ..............................Addis Ababa
        </Grid>

        <Grid item xs={6}>
        Date of Birth .....................................04/04/2022
        </Grid>

        <Grid item xs={6}>
        Place of Birth ..............................Addis Ababa
        </Grid> 
      </Grid>

      <div className="section-container">
          <h3 className="section-title">Profile</h3>
      </div>
    


    </div>
  );
}
