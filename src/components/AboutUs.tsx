/* eslint-disable react/no-array-index-key */
import { Grid, Typography, Box, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { motion } from 'framer-motion';

const aboutUsContent = {
  intro: 'Welcome to Our Company',
  description: `Founded in 2010, Our Company has been at the forefront of innovation, consistently delivering top-quality products and services to our customers. Our mission is to empower businesses and individuals through cutting-edge technology and unparalleled support.`,
  mission: 'Our Mission',
  missionDescription: `To provide innovative solutions that empower our customers to achieve their goals with efficiency and confidence.`,
  vision: 'Our Vision',
  visionDescription: `To be the global leader in our industry, setting standards for excellence in service, quality, and innovation.`,
  team: [
    {
      name: 'John Doe',
      position: 'CEO',
      description:
        'John leads our company with over 20 years of industry experience.',
      image: 'path/to/image1.jpg',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      description:
        'Jane is the technical genius behind our innovative products.',
      image: 'path/to/image2.jpg',
    },
    // Add more team members as needed
  ],
};

function AboutUs() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : grey[800],
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        {aboutUsContent.intro}
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        {aboutUsContent.description}
      </Typography>
      <Grid container spacing={6} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                {aboutUsContent.mission}
              </Typography>
              <Typography variant="body1">
                {aboutUsContent.missionDescription}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                {aboutUsContent.vision}
              </Typography>
              <Typography variant="body1">
                {aboutUsContent.visionDescription}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 8 }}>
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {aboutUsContent.team.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 2,
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                >
                  {member.position}
                </Typography>
                <Typography variant="body2">{member.description}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AboutUs;
