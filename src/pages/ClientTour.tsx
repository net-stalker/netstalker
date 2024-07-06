/* eslint-disable react/no-array-index-key */
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

const steps = [
  {
    title: 'Step 1: Login',
    description: 'Log in to the application using your credentials.',
    image: 'path_to_login_screenshot.jpg', // Replace with actual image path
  },
  {
    title: 'Step 2: Dashboard Overview',
    description:
      'Take a look at your dashboard to get an overview of your activity.',
    image: 'path_to_dashboard_screenshot.jpg', // Replace with actual image path
  },
  {
    title: 'Step 3: Profile Settings',
    description:
      'Visit your profile settings to update your personal information.',
    image: 'path_to_profile_settings_screenshot.jpg', // Replace with actual image path
  },
  {
    title: 'Step 4: Reports',
    description: 'Generate and view reports for your activities.',
    image: 'path_to_reports_screenshot.jpg', // Replace with actual image path
  },
];

function ClientTour() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Client Tour
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: 60, height: 3, bgcolor: 'grey.500', mt: 1 }} />
        </Box>
        {steps.map((step, index) => (
          <Card key={index} sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={step.image}
                  alt={step.title}
                  sx={{ maxHeight: 400 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default ClientTour;
