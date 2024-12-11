import React from 'react';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import { Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `url('https://your-image-url.com') center/cover no-repeat`,
        position: 'relative',
        padding: '20px',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />
      <Slide direction="up" in={true} timeout={700}>
        <Container
          sx={{
            position: 'relative',
            zIndex: 2,
            padding: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: '20px',
              color: '#2c3e50',
            }}
          >
            Join us today and start your journey!
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginBottom: '10px',
              fontWeight: 'bold',
              color: '#2c3e50',
            }}
          >
            Welcome to Registration
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: '30px',
              color: '#6c757d',
            }}
          >
            Please choose your registration type to get started.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  padding: '12px 20px',
                  background: 'linear-gradient(135deg, #56CCF2, #2F80ED)',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  textTransform: 'none',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
                onClick={() => navigate('/visitor')}
              >
                <PersonIcon /> Individual
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  padding: '12px 20px',
                  background: 'linear-gradient(135deg, #F2994A, #F2C94C)',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  textTransform: 'none',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
                onClick={() => navigate('/institution')}
              >
                <BusinessIcon /> Institution
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Slide>
    </Box>
  );
};

export default Register;
