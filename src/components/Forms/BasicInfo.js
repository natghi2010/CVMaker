import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CV } from "../MainCard";
import http from "../../data/http";
import nationality from "./reference/basicInfoRef";

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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="name"
            variant="standard"
            label="Name"
            value={user.basicInfo.name}
            onChange={(e) => {
              setUser({
                ...user,
                basicInfo: { ...user.basicInfo, name: e.target.value },
              });
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="role"
            variant="standard"
            value={user.basicInfo.role}
            label="Role"
            onChange={(e) => {
              setUser({
                ...user,
                basicInfo: { ...user.basicInfo, role: e.target.value },
              });
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="birthDate"
            variant="standard"
            label="Date of Birth"
            value={user.basicInfo.birthDate}
            type="date"
            onChange={(e) => {
              setUser({
                ...user,
                basicInfo: { ...user.basicInfo, date_of_birth: e.target.value },
              });
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl
            variant="standard"
            sx={{ mr: 10, ml: 5, mb: 5.5, mt: 0.5, minWidth: "30ch" }}
          >
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              id="gen"
              onChange={(e) =>
                setUser({
                  ...CVContext.user,
                  basicInfo: {
                    ...CVContext.user.basicInfo,
                    gender: e.target.value,
                  },
                })
              }
            >
              <MenuItem  value={"Female"}>Female</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Prefer Not To Say"}>Prefer Not To Say</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
        <Autocomplete
      id="nationality"
      sx={{ width: 300 }}
      options={nationality}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Nationality"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
        
        </Grid>


        <Grid item xs={6}>
          <TextField
            id="birthPlace"
            label="Place Of Birth"
            variant="standard"
            value={user.basicInfo.place_of_birth}
            onChange={(e) => {
              setUser({
                ...user,
                basicInfo: {
                  ...user.basicInfo,
                  place_of_birth: e.target.value,
                },
              });
            }}
          />
        </Grid>
        <Grid item xs={6}>
        
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="address"
            label="Address"
            value={user.basicInfo.address}
            variant="standard"
            onChange={(e) => {
              setUser({
                ...user,
                basicInfo: { ...user.basicInfo, address: e.target.value },
              });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="number"
            label="Phone Number"
            value={user.basicInfo.phone_number}
            variant="standard"
            onChange={(e) => {
              setUser({
                ...user,
                basicInfo: { ...user.basicInfo, phone_number: e.target.value },
              });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="email"
            label="Email"
            value={user.basicInfo.email}
            variant="standard"
            onChange={(e) => {
              setUser({
                ...user,
                basicInfo: { ...user.basicInfo, email: e.target.value },
              });
            }}
          />
        </Grid>
      </Grid>

      {/*
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
      </div> */}
    </Box>
  );
}
