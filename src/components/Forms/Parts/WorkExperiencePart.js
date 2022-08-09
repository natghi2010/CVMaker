import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { CV } from "../../MainCard";
import DeleteIcon from "@mui/icons-material/Delete";

export default function WorkExperincePart({ index }) {
  const CVContext = useContext(CV);
  const setUser = CVContext.setUser;
  const user = CVContext.user;
  return (
    <div>
      <Box
        className="educationParts"
        component="form"
        sx={{
          "& .MuiTextField-root": {
            mr: 10,
            ml: 5,
            mb: 5.5,
            mt: 0.5,
            width: "30ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div align="right">
          {CVContext.user.workExperinces.length > 1 && (
            <Button
              startIcon={<DeleteIcon />}
              sx={{
                color: "gray",
                marginRight: "0.5px",
                marginTop: "7px",
                marginBottom: "10px",
                marginLeft: "10px",
                float: "right",
              }}
              onClick={() => {
                CVContext.removeWorkExperience(index);
              }}
            ></Button> 
          )}
          <br/>
        </div>
        {CVContext.user.workExperinces[index].title.length > 0 &&
          CVContext.user.workExperinces[index].company_name.length > 0 && (
            <div className="workPartTitle">
               {CVContext.user.workExperinces[index].title} @ <span>{CVContext.user.workExperinces[index].company_name}</span> 
            </div>
          )}
        <div>
          <TextField
            id="standard-basic"
            onChange={(e) =>
              setUser({
                ...user,
                workExperinces: [
                  ...user.workExperinces.slice(0, index),
                  {
                    ...user.workExperinces[index],
                    company_name: e.target.value,
                  },
                  ...user.workExperinces.slice(index + 1),
                ],
              })
            }
            label="Company Name"
            variant="standard"
          />

          <TextField
            id="standard-number"
            onChange={(e) =>
              setUser({
                ...user,
                workExperinces: [
                  ...user.workExperinces.slice(0, index),
                  {
                    ...user.workExperinces[index],
                    title: e.target.value,
                  },
                  ...user.workExperinces.slice(index + 1),
                ],
              })
            }
            label="Title"
            variant="standard"
          />

          <TextField
            id="standard-multiline-static"
            onChange={(e) =>
              setUser({
                ...CVContext.user,
                workExperinces: {
                  ...CVContext.user.workExperinces,
                  age: e.target.value,
                },
              })
            }
            label= "Description"
            multiline
            fullwidth
            maxRows={5}
          />
        </div>
        <div>
          <TextField
            id="standard-number"
            onChange={(e) =>
              setUser({
                ...CVContext.user,
                workExperinces: {
                  ...CVContext.user.workExperinces,
                  age: e.target.value,
                },
              })
            }
            label="Start Date"
            variant="standard"
          />

          <TextField
            id="standard-number"
            onChange={(e) =>
              setUser({
                ...CVContext.user,
                workExperinces: {
                  ...CVContext.user.workExperinces,
                  age: e.target.value,
                },
              })
            }
            label="End Date"
            variant="standard"
          />
        </div>
      </Box>
    </div>
  );
}
