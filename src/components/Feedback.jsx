import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating a successful submission
    setSuccessMessage('Thank you for your feedback!');
    setFeedback({
      name: '',
      email: '',
      message: '',
    });

    // Optionally clear the success message after a timeout
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <Container sx={{ padding: 4, marginBottom: 4 }}>
      <Grid container spacing={4}>
        {/* Contact Info Section */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: '#e0f7fa',
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Box sx={{ marginBottom: 3 }}>
              <Phone sx={{ marginRight: 2 }} />
              <Typography variant="body1" sx={{ display: 'inline' }}>
                +254727 815 187
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 3 }}>
              <Email sx={{ marginRight: 2 }} />
              <Typography variant="body1" sx={{ display: 'inline' }}>
              info@exploreeducationafrica.com | 
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 3 }}>
              <LocationOn sx={{ marginRight: 2 }} />
              <Typography variant="body1" sx={{ display: 'inline' }}>
                Nairobi, Kenya
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Feedback Form Section */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}>
            We Value Your Feedback
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4, color: '#555' }}>
            Please share your feedback with us to help us improve our services.
          </Typography>

          {successMessage && (
            <Typography
              variant="body1"
              sx={{ marginBottom: 3, color: '#4caf50', fontWeight: 'bold' }}
            >
              {successMessage}
            </Typography>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={feedback.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  name="email"
                  value={feedback.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Feedback"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  value={feedback.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: 2,
                backgroundColor: '#388e3c',
                '&:hover': {
                  backgroundColor: '#2c6e2f',
                },
              }}
            >
              Submit Feedback
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feedback;
