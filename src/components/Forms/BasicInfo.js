import * as React from "react";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
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
      <Grid container sx={{
        mt:1
      }} spacing={2}>
          <Grid item xs={6}> 
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
          </Grid>
          <Grid item xs={6}>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                id="date"
                variant="standard"
                onChange={(e) =>
                  setUser({
                    ...user,
                    basicInfo: { ...user.basicInfo, date_of_birth: e.target.value },
                  })
                }
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-basic"
              onChange={(e) =>
                setUser({
                  ...CVContext.user,
                  basicInfo: { ...CVContext.user.basicInfo, place_of_birth: e.target.value },
                })
              }
              label="Place of Birth"
              variant="standard"
            /> 
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-basic"
              onChange={(e) =>
                setUser({
                  ...CVContext.user,
                  basicInfo: { ...CVContext.user.basicInfo, nationality: e.target.value },
                })
              }
              label="Nationality"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl
              variant="standard"
              sx={{ mr: 10, ml: 5, mb: 5.5, mt: 0.5, minWidth: "30ch" }}
            >
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                id="gender"
                onChange={(e) =>
                  setUser({
                    ...CVContext.user,
                    basicInfo: { ...CVContext.user.basicInfo, gender: e.target.value },
                  })
                }
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Prefer Not To Say"}>Prefer Not To Say</MenuItem>
              </Select>
            </FormControl>
            </Grid>
          <Grid item xs={6}>
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
          <Grid/>
          <Grid item xs={6}>
            <TextField
              id="standard-number"
              onChange={(e) =>
                setUser({
                  ...CVContext.user,
                  basicInfo: { ...CVContext.user.basicInfo, phone_number: e.target.value },
                })
              }
              label="Phone Number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
    </Grid>
    </Grid>
    </Box>
  );
}
