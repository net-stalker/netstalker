import { Box, Grid, Typography, Link, Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LaptopIcon from '@mui/icons-material/Laptop';

export default function Documentation() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Documentation
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: 60, height: 3, bgcolor: 'grey.500', mt: 1 }} />
        </Box>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <PersonIcon sx={{ fontSize: 100 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Users
              </Typography>
              <Typography variant="body1" gutterBottom>
                For Netalker users several guides are available:
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Link
                  href="/#/documentation/client-tour"
                  color="secondary"
                  display="block"
                >
                  Client guide
                </Link>
                <Link
                  href="https://github.com/net-stalker/net-agent"
                  color="secondary"
                  display="block"
                >
                  net-agent guide
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <LaptopIcon sx={{ fontSize: 100 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Developers
              </Typography>
              <Typography variant="body1" gutterBottom>
                For developers we have:
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Link
                  href="link-to-rust-books"
                  color="secondary"
                  display="block"
                >
                  Developers Guide
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
