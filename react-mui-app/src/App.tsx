import { Box, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { ReportDialog } from './Components/ReportDialog';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box p={2}>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          Report a problem
        </Button>
        <ReportDialog open={open} onClose={() => setOpen(false)} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
