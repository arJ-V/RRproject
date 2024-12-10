// src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import KYCForm from './components/KYCForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <KYCForm />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;