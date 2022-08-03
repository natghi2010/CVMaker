import * as React from "react";
import { Box, TextField } from "@mui/material";
import { CV } from "../MainCard";


export default function BasicInfo() {
  const CVContext = React.useContext(CV)
  const setUser = CVContext.setUser;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          mr: 10,
          ml: 5,
          mb: 5.5,
          mt: 0.5,
          width: "35ch",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      {CVContext.user.basicInfo.name}
        <TextField id="standard-basic"
        onChange={(ev)=>{
          setUser(
            
          )
        }}
        
        label="Highschool" variant="standard" />
        <TextField
          id="standard-basic"
          label="College/Community School"
          variant="standard"
        />
      </div>
    </Box>
  );
}


