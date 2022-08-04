import * as React from "react";
import { Box, TextField } from "@mui/material";
import { CV } from "../MainCard";

export default function BasicInfo() {
  const CVContext = React.useContext(CV);
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
              basicInfo: { ...user.basicInfo, name: e.target.value },
            })
          }
          label="Name"
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
      </div>
      <div>
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
      </div>
    </Box>
  );
}
