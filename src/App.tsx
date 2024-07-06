import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import NotFound from './pages/NotFound';
import AppAppBar from './components/AppAppBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import DocumentationPage from './pages/Documentation';
import ClientTour from './pages/ClientTour';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/documentation" element={<DocumentationPage />} />
      <Route path="/documentation/client-tour" element={<ClientTour />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  // Get initial mode from localStorage or system preference
  const getInitialMode = (): PaletteMode => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode === 'dark' || savedMode === 'light') {
      return savedMode;
    }
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDarkMode ? 'dark' : 'light';
  };

  const [mode, setMode] = React.useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    // Save mode to localStorage whenever it changes
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <App />
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
}
