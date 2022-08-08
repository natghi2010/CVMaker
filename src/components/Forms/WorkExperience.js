import * as React from "react";
import { Fab } from "@mui/material";
import { useContext } from "react";
import { CV } from "..//MainCard";
import WorkExperincePart from "./Parts/WorkExperiencePart";
import { AddCircleOutline } from "@mui/icons-material";

export default function WorkExperinces() {
  const CVContext = useContext(CV);
  const setUser = CVContext.setUser;
  const user = CVContext.user;
  return (
    <div>
    <tag>
        {CVContext.user.workExperinces.map((workExperince, index) => {
          return <WorkExperincePart key={index} index={index} />;
        })}
        <div align="right">
          <Fab
          color="primary"
          aria-label="add"
            className="addEducation"
            onClick={() => {
              CVContext.addWorkExperience();
            }}
          >
            <AddCircleOutline />
          </Fab>
        </div>
      </tag>
    </div>
  );
}
