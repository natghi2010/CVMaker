import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import skillsref from "./reference/skillsref";
import { CV } from "..//MainCard";
import { useContext } from "react";
import { Button, Grid } from "@mui/material";

export default function Skills() {
  const CVContext = useContext(CV);

  return (
    <Stack spacing={3} sx={{ width: 700 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={skillsref}
        onChange={(event, value) => {
          CVContext.setUser({
            ...CVContext.user,
            skills: value,
          });
        }}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Technologies"
            placeholder="--"
          />
        )}
      />
      <Grid container spacing={2}>
        {CVContext.user.skills.map((skill, index) => {
          return (
            <Grid
              key={index}
              item
              xs={3}
              sx={{
                paddingTop: 1,
                paddingBottom: 1,
              }}
            >
              <img
                src={skill.icon}
                alt={skill.title}
                width="30"
                sx={{
                  marginBottom: "-8px",
                }}
              />{" "}
              &nbsp;
              {skill.title}
            </Grid>
          );
        })}
      </Grid>
      <Button variant= "contained" onClick={()=>{CVContext.handlePrint()}}> Print</Button>
    </Stack>
  );
}


