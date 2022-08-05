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
import { CV } from "../../MainCard";
export default function EducationParts({index,name}){

    console.log(name);


    const CVContext = React.useContext(CV);
    const setUser = CVContext.setUser;
    const user = CVContext.user;
  
    const [instituionType, setInstituionType] = React.useState(CVContext.user.educationExperience[index].institution_type);

    return(
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
  
          {instituionType.length != 0 && (
            <div>
              <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUser({
                    ...user,
                    educationExperience: [
                        ...user.educationExperience,
                        {
                            ...user.educationExperience[index],
                            institution_type: instituionType,
                            instituion_name: e.target.value,
                        },
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
                    .map((educationType,index) => {
                      return (
                        <MenuItem key={index} value={educationType.certificate}>
                          {educationType.certificate}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
              <br />
             {instituionType != 'High School' && <TextField
                id="standard-basic"
                onChange={(e) =>
                  setUser({
                    ...user,
                    Education: { ...user.Education, Major: e.target.value },
                  })
                }
                label="Major"
                variant="standard"
              />}
              <TextField
                id="standard-number"
                helperText="yyyy"
                onChange={(e) =>
                  setUser({
                    ...user,
                    Education: {
                      ...user.Education,
                      Graduating_Year: e.target.value,
                    },
                  })
                }
                label="Graduating year"
                variant="standard"
              />
            </div>
          )}
        </div>

       
      </Box>
    )
}