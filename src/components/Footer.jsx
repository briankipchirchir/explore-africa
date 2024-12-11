import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '20px 0',
        marginTop: 'auto',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Explore Education Africa</Typography>
            <Typography variant="body2">
              Empowering education and career growth through innovation.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <br />
            <Link href="/programme" color="inherit" underline="hover">
              Programme
            </Link>
            <br />
            <Link href="/exhibition" color="inherit" underline="hover">
              Exhibition
            </Link>
            <br />
            <Link href="/sponsorship" color="inherit" underline="hover">
              Sponsorship
            </Link>
            <br />
            <Link href="/register" color="inherit" underline="hover">
              Register
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body2">Email: info@exploreafrica.com</Typography>
            <Typography variant="body2">Phone: +254 712 345 678</Typography>
            <Typography variant="body2">Location: Nairobi, Kenya</Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: '20px', fontSize: '0.875rem' }}
        >
          © 2024 Explore Education Africa. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
