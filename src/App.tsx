import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import React from 'react';
import NotFound from './pages/NotFound';
import AppAppBar from './components/AppAppBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Documentation from './pages/Documentation';
import ClientTour from './pages/ClientTour';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/documentation/client-tour" element={<ClientTour />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
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
