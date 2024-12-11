import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

const speakers = [
  {
    name: 'To Be Announced',
    title: 'To Be Announced',
    photo: 'https://via.placeholder.com/200', // Placeholder image
    bio: 'Details will be updated soon.',
  },
  {
    name: 'To Be Announced',
    title: 'To Be Announced',
    photo: 'https://via.placeholder.com/200', // Placeholder image
    bio: 'Details will be updated soon.',
  },
  {
    name: 'To Be Announced',
    title: 'To Be Announced',
    photo: 'https://via.placeholder.com/200', // Placeholder image
    bio: 'Details will be updated soon.',
  },
];

const KeynoteSpeakers = () => {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 'bold', color: '#333' }}>
        Keynote Speakers
      </Typography>
      <Grid container spacing={4}>
        {speakers.map((speaker, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={speaker.photo}
                alt={speaker.name}
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {speaker.name}
                </Typography>
                <Typography variant="body1" sx={{ color: 'gray', marginBottom: 1 }}>
                  {speaker.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  {speaker.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KeynoteSpeakers;
