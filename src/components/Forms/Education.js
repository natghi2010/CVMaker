import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Education() {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { mt: 2, mr: 5, ml: 5, mb: 8,  width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
          <div>
              <TextField id="standard-basic" label="Highschool" variant="standard" />
              <TextField id="standard-basic" label="College/Community School" variant="standard"/>
          </div>
              
  
        
      </Box>
    );
  }