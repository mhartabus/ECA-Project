import {
  Button
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';


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
  const [mobileOpen, setMobileOpen] = useState(false);


  return (
    <ThemeProvider theme={theme}>
     <Button variant="contained" color="primary">
      Click me
     </Button>
    </ThemeProvider>
  );
};

export default App;
