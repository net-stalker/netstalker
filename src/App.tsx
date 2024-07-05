import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import LandingPage from './LandingPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
