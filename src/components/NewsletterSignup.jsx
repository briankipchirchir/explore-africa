import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      // You can replace this with an API call to submit the email
      console.log(`Email submitted: ${email}`);
      setIsSubscribed(true);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', margin: '20px' }}>
      <Typography variant="h5" sx={{ marginBottom: '10px' }}>
        Subscribe to Our Newsletter
      </Typography>
      {!isSubscribed ? (
        <>
          <TextField
            label="Enter your email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginBottom: '10px' }}
          />
          <Button onClick={handleSubscribe} variant="contained">
            Subscribe
          </Button>
        </>
      ) : (
        <Typography variant="body1" sx={{ marginTop: '10px' }}>
          Thank you for subscribing!
        </Typography>
      )}
    </Box>
  );
};

export default NewsletterSignup;
