import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme, darkTheme, lightTheme } from './theme';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <link href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap'/>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider> 
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
