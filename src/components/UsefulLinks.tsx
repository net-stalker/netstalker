/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Grid, Typography, Box, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { grey } from '@mui/material/colors';

const links = [
  {
    title: 'Material-UI',
    description: 'React components for faster and easier web development.',
    url: 'https://mui.com/',
  },
  {
    title: 'React',
    description: 'A JavaScript library for building user interfaces.',
    url: 'https://reactjs.org/',
  },
  {
    title: 'Framer Motion',
    description: 'A production-ready motion library for React.',
    url: 'https://www.framer.com/motion/',
  },
  {
    title: 'Netlify',
    description: 'The best way to build and deploy modern web projects.',
    url: 'https://www.netlify.com/',
  },
  // Add more links as needed
];

function UsefulLinks() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : grey[800],
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Useful Links
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {links.map((link, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Paper
                elevation={3}
                sx={{
                  ml: 2,
                  mr: {
                    md: (index + 1) % 3 === 0 ? 2 : 0,
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
                  {link.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {link.description}
                </Typography>
                <Typography variant="body2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: theme.palette.primary.main,
                    }}
                  >
                    Visit Site
                  </a>
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UsefulLinks;
