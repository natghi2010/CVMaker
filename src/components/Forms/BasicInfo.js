import * as React from "react";
import { Box, TextField } from "@mui/material";

export default function BasicInfo() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mr: 10, ml: 5, mb: 5.5, mt: 0.5, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="standard-basic" label="First Name" variant="INPUT"/>
        <TextField id="standard-basic" label="Last Name" type="Standard"/>
      </div>
      <div>
        <TextField id="standard-number" label="Age" type="number"/>
        <TextField id="standard-basic" label="Email Address" type="Standard"/>
      </div>
      <div>
        <TextField id="standard-number" label="Phone Number" type="number"/>
      </div>
    </Box>
  )
}