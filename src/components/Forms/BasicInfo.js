import * as React from "react";
import { Box, Stack, TextField } from "@mui/material";
import { CV } from "../MainCard";

export default function BasicInfo() {
  const CVContext = React.useContext(CV);
  const setUser = CVContext.setUser;
  const user = CVContext.user;

  return (
    <Box
      className="educationParts"
      component="form"
      elevation={2}
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
              basicInfo: { ...user.basicInfo, name: e.target.value },
            })
          }
          label="Name"
          value={user.basicInfo.name}
          variant="standard"
        />
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="date"
            variant="standard"
            label="Date of Birth"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <br />
        <TextField
          id="standard-basic"
          onChange={(e) =>
            setUser({
              ...CVContext.user,
              basicInfo: { ...CVContext.user.basicInfo, address: e.target.value },
            })
          }
          label="Place of Birth"
          variant="standard"
        /> 
        <TextField
          id="standard-basic"
          onChange={(e) =>
            setUser({
              ...CVContext.user,
              basicInfo: { ...CVContext.user.basicInfo, address: e.target.value },
            })
          }
          label="Nationality"
          variant="standard"
        />
        <br/>
        <TextField
          id="standard-basic"
          onChange={(e) =>
            setUser({
              ...CVContext.user,
              basicInfo: { ...CVContext.user.basicInfo, address: e.target.value },
            })
          }
          label="Address"
          variant="standard"
        />
        <TextField
          id="standard-number"
          onChange={(e) =>
            setUser({
              ...CVContext.user,
              basicInfo: { ...CVContext.user.basicInfo, age: e.target.value },
            })
          }
          label="Phone Number"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          onChange={(e) =>
            setUser({
              ...CVContext.user,
              basicInfo: { ...CVContext.user.basicInfo, email: e.target.value },
            })
          }
          label="Email"
          variant="standard"
        />
      </div>
    </Box>
  );
}
