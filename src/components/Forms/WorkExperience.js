import * as React from "react";
import { Box, TextField } from "@mui/material";
import { useContext } from "react";
import { CV } from "../MainCard";
import { width } from "@mui/system";

export default function WorkExperinces() {
  const CVContext = useContext(CV);
  const setUser = CVContext.setUser;
  const user = CVContext.user;
  return (
    <Box
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
      <div>
        <TextField
          id="standard-basic"
          onChange={(e) =>
            setUser({
              ...user,
              workExperinces: {
                ...user.workExperinces,
                company_name: e.target.value,
              },
            })
          }
          label="Company Name"
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
          label="Description"
          multiline
          sx={
            {
              width: "100%"
            }
          }
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
  );
}
