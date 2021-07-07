import ThemeProvider from '@material-ui/styles/ThemeProvider';
import React from 'react';
import { ContainerApp } from './AppStyled';
import theme from './constants/theme';
import GlobalState from './global/GlobalState';
import Router from './routes/Router';

function App() {
  return (
    <ContainerApp>
      <ThemeProvider theme={theme}>
        <GlobalState>
          <Router />
        </GlobalState>
      </ThemeProvider>
    </ContainerApp>
  );
}

export default App;
