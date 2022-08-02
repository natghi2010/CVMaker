import { Box, Button, ButtonGroup, } from "@mui/material";
import { CV } from './MainCard';
import { useContext } from 'react';

function Footer() {

    const CVContext = useContext(CV);

    return (
      <div className="footer">
        <Box sx={{ mb: 2 }}>
            <ButtonGroup className="footerButton" 
            variant="text" 
            aria-label="text button group"
            size="small">
                <Button
                disabled={CVContext.activeStep === 0}
                onClick={CVContext.handleBack}
                sx={{ mt: 1, mr: 1, }}
                >
                Prev &nbsp; 
                </Button>
                <Button
                color="secondary"
                onClick={CVContext.handleNext}
                sx={{ mt: 1, mr: 1 }}
                >
                {CVContext.activeStep === CVContext.steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </ButtonGroup>
        </Box>
      </div>

    );
  }
  
  export default Footer;