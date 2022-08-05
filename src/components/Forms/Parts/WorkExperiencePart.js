import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { CV } from "../../MainCard";
import { DeleteForeverOutlined } from "@mui/icons-material";

export default function WorkExperincePart({index}) {
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
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "gray",
              marginRight: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            flat
            onClick={() => {
              CVContext.removeWorkExperience(index);
            }}
          >
            {/* Minus Icon */}
            <DeleteForeverOutlined />
          </Button>
        )}
      </div>
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
            fullWidth
            multiline
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
