import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CV } from "../../MainCard";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function EducationParts({ index, name }) {
  const CVContext = React.useContext(CV);
  const setUser = CVContext.setUser;
  const user = CVContext.user;

  const [instituionType, setInstituionType] = React.useState(
    CVContext.user.educationExperience[index].institution_type || ""
  );

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
        <div align="right">
          {CVContext.user.educationExperience.length > 1 && (
            <Button
              startIcon={<DeleteIcon />}
              sx={{
                color: "gray",
                marginRight: "0.5px",
                marginTop: "7px",
                marginBottom: "10px",
                marginLeft: "10px",
                float: "Right",
        
              }}
              onClick={() => {
                CVContext.removeEducation(index);
              }}
            >
            </Button>
          )}
        </div>
      
        <FormControl
          variant="standard"
          sx={{ mr: 10, ml: 5, mb: 5.5, mt: 0.5, minWidth: "30ch" }}
        >
          <InputLabel id="Degree">Type of Institution</InputLabel>
          <Select
            id="Inst"
            value={instituionType}
            onChange={(e) => setInstituionType(e.target.value)}
          >
            <MenuItem value={"High School"}>High School</MenuItem>
            <MenuItem value={"College"}>College</MenuItem>
            <MenuItem value={"University"}>University</MenuItem>
          </Select>
        </FormControl>
        <br />

        {instituionType.length !== 0 && (
          <div>
            <TextField
              id="standard-basic"
              onChange={(e) =>
                setUser({
                  ...user,
                  educationExperience: [
                    ...user.educationExperience.slice(0, index),
                    {
                      ...user.educationExperience[index],
                      instituion_name: e.target.value,
                    },
                    ...user.educationExperience.slice(index + 1),
                  ],
                  
                })
              
                 
              }
              label={instituionType + " Name"}
              variant="standard"
            />
            <FormControl
              variant="standard"
              sx={{ mr: 10, ml: 5, mb: 5.5, mt: 0.5, minWidth: "30ch" }}
            >
              <InputLabel id="Degree">Degree Type</InputLabel>
              <Select id="degree" label="Degree Type">
                {CVContext.educationTypes
                  .filter((educationType) => {
                    return educationType.tag.includes(instituionType);
                  })
                  .map((educationType, index) => {
                    return (
                      <MenuItem key={index} value={educationType.certificate}>
                        {educationType.certificate}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <br />
            {instituionType !== "High School" && (
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUser({
                    ...user,
                    educationExperience: [
                      ...user.educationExperience.slice(0, index),
                      {
                        ...user.educationExperience[index],
                        degree: e.target.value,
                      },
                      ...user.educationExperience.slice(index + 1),
                    ],
                    
                  })
                }
                label="Major"
                variant="standard"
              />
            )}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={["month","year"]}
              label="Graduation Year"
              minDate={new Date("1960-03-01")}
              maxDate={new Date("2024-06-01")}
              value={new Date(user.educationExperience[index].graduation_year || "")}
              onChange={(date) => {
                setUser({
                  ...user,
                  educationExperience: [
                    ...user.educationExperience.slice(0, index),
                    {
                      ...user.educationExperience[index],
                      graduation_year: date,
                    },
                    ...user.educationExperience.slice(index + 1),
                  ],
                });
              }}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
          </div>
        )}
      </div>
    </Box>
  );
}
