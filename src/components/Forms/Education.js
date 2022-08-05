import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { CV } from "../MainCard";
import educationTypes from "./reference/educationTypeRef";
import EducationParts from "./Parts/EducationParts";
import { AddCircleOutline, AddIcCallOutlined, AddOutlined, HdrPlus, PlusOneOutlined } from "@mui/icons-material";

export default function Education() {
  const CVContext = React.useContext(CV);

  return (
    <div>
      {CVContext.user.educationExperience.map((education, index) => {
        return (
          <>
             
            <EducationParts
              className="educationParts"
              key={index}
              index={index}
            />
          </>
        );
      })}
   <div align="right">
    <Fab
      color="primary"
      aria-label="add"
      className="addEducation"
      onClick={() => {
        CVContext.addEducation()
      }}
    >
      <div>
      <FormControl variant="standard" sx={{ mr: 10, ml: 5, mb: 5.5, mt: 0.5, minWidth: "30ch" }}>
        <InputLabel id="Degree">Type of Institution</InputLabel>
        <Select
          id="Inst"
          value={degree}
          onChange={(e) =>
            setDegree(e.target.value)
          }
        >
          <MenuItem value={'HighSchool'}>High School</MenuItem>
          <MenuItem value={'College'}>College</MenuItem>
          <MenuItem value={'University'}>University</MenuItem>
        </Select>
        </FormControl>
        <br/>
        <TextField
          id="standard-basic"
          onChange={(e) =>
            setUser({
              ...user,
              Education: { ...user.Education, University: e.target.value },
            })
          }
          label="Institution Name"
          variant="standard"
        />
        <FormControl variant="standard" sx={{ mr: 10, ml: 5, mb: 5.5, mt: 0.5, minWidth: "30ch" }}>
        <InputLabel id="Degree">Degree Type</InputLabel>
        <Select
          id="degree"
          value={degree}
          onChange={(e) =>
            setDegree(e.target.value)
          }
          label="Degree Type"
        >
          <MenuItem value={'Diploma'}>Diploma</MenuItem>
          <MenuItem value={'Associate'}>Associate Degree</MenuItem>
          <MenuItem value={'Bachelors'}>Bachelor's Degree</MenuItem>
          <MenuItem value={'Masters'}>Master's Degree</MenuItem>
          <MenuItem value={'Doctrate'}>Doctoral degree</MenuItem>
        </Select>
        </FormControl>
        <br />
        <TextField
          id="standard-basic"
          onChange={(e) =>
            setUser({
              ...user,
              Education: { ...user.Education, Major: e.target.value },
            })
          }
          label="Major"
          variant="standard"
        />
        <TextField
          id="standard-number"
          helperText="mm/dd/yyyy"
          onChange={(e) =>
            setUser({
              ...user,
              Education: { ...user.Education, Graduating_Year: e.target.value },
            })
          }
          label="Graduating year"
          variant="standard"
        />
      </div>
    </Box>
  );
}
