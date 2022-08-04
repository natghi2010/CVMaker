import * as React from 'react';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { CV } from '../MainCard';

export default function WorkExperinces() {
    const CVContext = useContext(CV);
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { mt: 2, mr: 5, ml: 5, mb: 8,  width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
     {CVContext.user.workExperinces.map((job,index)=>{
       return (<div key={index}>
        Company Name : {job.company_name} <br/>
        Start Date : {job.start_date}
       </div>)
     })}
                
      </Box>
    );
  }