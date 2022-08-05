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
      <AddCircleOutline />
    </Fab>
    </div>
    </div>
  );
}
