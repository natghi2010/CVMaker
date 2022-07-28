
import { autocompleteClasses } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FormContainer from './MainForm/FormContainer';
import TitleHolder from './Sections/TitleHolder';

function MainCard() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            margin: 15,
            width: 725,
            height: 3,
            padding: 32,
          },
        }} 
      >
        <Paper elevation={0}>
        <TitleHolder/>
        <FormContainer/>
        </Paper>
      </Box>
    );
  }

export default MainCard;