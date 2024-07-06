/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Grid, Typography, Box, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { grey } from '@mui/material/colors';

const features = [
  {
    title: 'Feature One',
    description:
      'This is the description for feature one. It is very useful and important.',
  },
  {
    title: 'Feature Two',
    description:
      'This is the description for feature two. It helps you achieve more with less effort.',
  },
  {
    title: 'Feature Three',
    description:
      'This is the description for feature three. It is designed to improve efficiency.',
  },
  // Add more features as needed
];

function Features() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : grey[800],
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Our Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper
                elevation={3}
                sx={{
                  ml: 2,
                  mr: {
                    md: index === features.length - 1 ? 2 : 0,
                    sm: (index + 1) % 2 === 0 ? 2 : 0,
                    xs: 2,
                  },
                  padding: 2,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Features;
