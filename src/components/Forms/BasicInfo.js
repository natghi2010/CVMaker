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
    <TextField id="standard-basic" label="Highschool" variant="standard" />
    <TextField id="standard-basic" label="College/Community School" variant="standard"/>
</div>
    </Box>
  )
}