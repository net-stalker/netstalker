/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function WhoAreWe() {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 10,
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            fontFamily="Inter"
            textAlign="center"
            variant="h5"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier features and services.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Typography
              fontFamily="Inter"
              textAlign="center"
              variant="h5"
              color="text.secondary"
              sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
            >
              Simply go to
            </Typography>
            <Typography
              fontFamily="Inter"
              textAlign="center"
              variant="h5"
              color="text.secondary"
              sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
            >
              <Link
                href="https://my.netstalker.io"
                target="_blank"
                rel="noopener"
              >
                my.netstalker.io
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
