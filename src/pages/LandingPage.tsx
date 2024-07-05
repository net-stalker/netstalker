import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import WhoAreWe from '../components/WhoAreWe';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Roadmap from '../components/Roadmap';
import UsefulLinks from '../components/UsefulLinks';

export default function LandingPage() {
  return (
    <>
      <WhoAreWe />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features />
        <Divider />
        <AboutUs />
        <Divider />
        <Roadmap />
        <Divider />
        <UsefulLinks />
      </Box>
    </>
  );
}
