import * as React from "react";
import { Button} from "@mui/material";
import { useContext } from "react";
import { CV } from "..//MainCard";
import WorkExperincePart from "./Parts/WorkExperiencePart";
import { AddCircleOutline } from "@mui/icons-material";

export default function WorkExperinces() {
  const CVContext = useContext(CV);
  
  return (
    <div>

        {CVContext.user.workExperinces.map((workExperince, index) => {
           return <WorkExperincePart key={index} index={index} />;
        })}
        <div align="right">
          <Button
          color="primary"
          aria-label="add"
            className="addEducation"
            onClick={() => {
              CVContext.addWorkExperience();
            }}
          >
            <AddCircleOutline />
          </Button>
        </div>
    </div>
  );
}
