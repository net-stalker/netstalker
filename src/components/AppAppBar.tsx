import * as React from 'react';
import { Link, PaletteMode, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
  transition: 'width 0.3s ease',
};

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(() => true);
      } else if (window.scrollY <= 50 && scrolled) {
        setScrolled(() => false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const [appBarBackgroundColor, logoWidth] = React.useMemo(() => {
    if (scrolled) {
      return ['black', '180px'];
    }
    return ['transparent', '140px'];
  }, [scrolled]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // const scrollToSection = (sectionId: string) => {
  //   const sectionElement = document.getElementById(sectionId);
  //   const offset = 128;
  //   if (sectionElement) {
  //     const targetScroll = sectionElement.offsetTop - offset;
  //     sectionElement.scrollIntoView({ behavior: 'smooth' });
  //     window.scrollTo({
  //       top: targetScroll,
  //       behavior: 'smooth',
  //     });
  //     setOpen(false);
  //   }
  // };

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          height: '200px',
          backgroundColor: theme.palette.primary.main,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box>
        <AppBar
          id="me"
          position="fixed"
          sx={{
            minHeight: 40,
            boxShadow: 0,
            backgroundImage: 'none',
            backgroundColor: appBarBackgroundColor,
            transition: 'background-color 0.3s ease',
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
              }}
            >
              <Link href="/">
                <img
                  loading="lazy"
                  src="https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
                  style={{
                    ...logoStyle,
                    width: logoWidth,
                  }}
                  alt="logo of sitemark"
                />
              </Link>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ ml: 2, minWidth: '30px', p: '4px' }}
              >
                <MenuIcon htmlColor={scrolled ? '#fff' : '#111'} />
              </Button>
            </Box>
            <Box>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    maxWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  <MenuItem component="a" href="/#/documentation">
                    Documentation
                  </MenuItem>
                  <Divider />
                </Box>
              </Drawer>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </Box>
  );
}

export default AppAppBar;
