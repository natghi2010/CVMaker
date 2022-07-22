
import { autocompleteClasses } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function MainCard() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 10,
            width: 1345,
            height: 20,
            paddingTop: 65,
            //paddingLeft: 30,
          },
        }}
      >
        <Paper elevation={0} />
      </Box>
    );
  }

export default MainCard;