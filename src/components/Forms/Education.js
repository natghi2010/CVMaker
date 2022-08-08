import * as React from "react";
import {
  Fab,
} from "@mui/material";
import { CV } from "../MainCard";
import EducationParts from "./Parts/EducationParts";
import {
  AddCircleOutline,
} from "@mui/icons-material";

export default function Education() {
  const CVContext = React.useContext(CV);

  return (
    <div>
      {CVContext.user.educationExperience.map((education, index) => {
        return (
          <div>
            <EducationParts
              className="educationParts"
              key={index}
              index={index}
            />
          </div>
        );
        })}
    

      <div align="right">
        <Fab
          color="primary"
          aria-label="add"
          className="addEducation"
          onClick={() => {
            CVContext.addEducation();
          }}
        >
          <AddCircleOutline />
        </Fab>
      </div>
    </div>
  );
}
