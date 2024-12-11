import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, Divider, CardMedia } from '@mui/material';
import { LocationOn, Event, ContactMail } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ExhibitionPage = () => {
  const navigate=useNavigate();
  return (
    <Box sx={{ backgroundColor: '#f4f4f9', padding: '40px' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#0d47a1',
          color: '#fff',
          textAlign: 'center',
          padding: '60px 20px',
          borderRadius: '10px',
          marginBottom: '40px',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          NISCPE 2024
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '20px' }}>
          Professional Skills Training & Career Pathways Expo
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          Fostering Talent and Work Skills through Professional Training, Innovation, and Entrepreneurship
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: '30px',
            backgroundColor: '#4caf50',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#45a047' },
          }}
          onClick={() => navigate('/register')}
        >
          Register Now
        </Button>
      </Box>

      {/* About Section */}
      <Box sx={{ marginBottom: '40px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          About the Exhibition
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}
        >
          NISCPE 2024 is a unique effort to bring career seekers, students, graduates, and job seekers in contact
          with professional skills providers, potential employers, government agencies, educators, and professional bodies.
          The event will host over 50 exhibitors and attract more than 10,000 visitors over 3 days.
        </Typography>
      </Box>

      {/* Key Highlights Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Why Attend?
              </Typography>
              <Typography>
                - Meet industry leaders and experts<br />
                - Access career guidance and training<br />
                - Explore career programs and employment pathways
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Event Highlights
              </Typography>
              <Typography>
                - 50+ exhibitors<br />
                - Workshops and seminars<br />
                - Certification programs and career pathways
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', borderRadius: '10px' }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Keynote Speakers
              </Typography>
              <Typography>
                Gain insights from leading experts and professionals in various industries. Discover trends shaping future
                careers and skills.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Gallery Section */}
      <Box sx={{ marginTop: '60px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Event Gallery
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <CardMedia
                component="img"
                height="250"
                image="https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.6435-9/51078323_387072088522665_9071791478358933504_n.jpg?stp=c0.130.1728.902a_dst-jpg_s526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFc-MkZkrlYTmUjCER1nUHf8LAUisvZOu7wsBSKy9k67gh265RakFKssVgCT9gJK7Zyw8TRupTAOuod4nareb4D&_nc_ohc=hMiUCRUm6kYQ7kNvgEIrDJ_&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=A_aY7oyj3uPSaFrqKqBV52c&oh=00_AYCMFTuMcuRTqmungBczqj0YQnDIWQ-4W4FW6ebtMXp6gw&oe=67808C3A"
                alt="Exhibition 1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <CardMedia
                component="img"
                height="250"
                image="https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.6435-9/51447788_387072065189334_5915431299702587392_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE80eHbwYwCRdQzghbOqhtZ7r3Xvu1C6V_uvde-7ULpX63-NpRjcGj_wuyqR4uw12kHG8_pbsccoYkN0pkq3OYL&_nc_ohc=J5bn6BP_OOcQ7kNvgEX9gGI&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=A8vjXOyvnnnk7aZB2dOwj8d&oh=00_AYCrte4HpIuEi9Kr4c8aG1Kmf-yi8s-vB5RmtXhaTBxTuA&oe=677A1C30"
                alt="Exhibition 2"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <CardMedia
                component="img"
                height="250"
                image="https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.6435-9/43950040_337180433511831_638124714463592448_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGZI_nwig6KoL3lVggeUuxNGTzdmZ2SGskZPN2ZnZIayT3S6M8qGadA0oYW4UFXuO5wpOc-8LlQt3_esbC5JOBh&_nc_ohc=Ca75rBt0mjgQ7kNvgEXfKlp&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=AtBPfCqGAcRGu6nrdNLQiVU&oh=00_AYCPBXNJsZDMynfp5wO-TmZRg8WU49cxX_Za1HXZLUwM9Q&oe=677A1638"
                alt="Exhibition 3"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <CardMedia
                component="img"
                height="250"
                image="https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.6435-9/43677198_336854190211122_2762881405577854976_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF7Ef9JvP8NGphj_5ZrUbseDfXsL_PtBAgN9ewv8-0ECFF2UnGQ2qJPu-niNQ81YZBQACMFfk6nQ3DwlToTLupT&_nc_ohc=zLfJlH06lH8Q7kNvgES1Bvl&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=AVnNuXVxo5J3aMTXV0_0WgL&oh=00_AYB54Nhkkm_yo1PXvLvpM_C0_OIn8oXqmLMrpTjFRzV6SA&oe=677A1407"
                alt="Exhibition 4"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <CardMedia
                component="img"
                height="250"
                image="https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.6435-9/51433342_387071915189349_8388442605104398336_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGQnBkEqTv8ZKYG9f-oBE3U3WpxKY0ZTrzdanEpjRlOvOZk-YB-f_o5ixlX9BIS2IcqX_Bw1NSyYkNTAnd-CqNb&_nc_ohc=_UzzzgPYI4QQ7kNvgFHGd4i&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=A_dZ3Ic9FtDqXM3qoJ8VwbF&oh=00_AYB_qfNUKb8iE9e7HvjZsO0ID1q4HTgenkkPUvg5-SUOFA&oe=677A2843"
                alt="Exhibition 5"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <CardMedia
                component="img"
                height="250"
                image="https://scontent.fnbo2-1.fna.fbcdn.net/v/t39.30808-6/298613248_574341424285463_9170331397626974793_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEh7HtYf4k4CO_vgrfT9xMt3zR5EsPHiRjfNHkSw8eJGKu5lEF65O5qzHrDUsfNIyKWzbpLLzX_PJEFcmZoQ7O7&_nc_ohc=vJoipQeV-dQQ7kNvgHL7kWI&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=A6CS7e5vjG3BVC23BAFyjGf&oh=00_AYBxJ6J3MevUbyH_VQyEp3_cv3bRIHAJpbB6Uxo3_bQEww&oe=675882F2"
                alt="Exhibition 6"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ marginTop: '40px', marginBottom: '40px' }}>
        <Divider sx={{ marginBottom: '20px' }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
          What People Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: '10px' }}>
              <CardContent>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  "Participating in NISCPE was a game-changer for my career. The workshops and networking sessions were
                  exceptional!" - James
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: '10px' }}>
              <CardContent>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  "A great platform to meet prospective employers and explore exciting career opportunities." - Vic
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          textAlign: 'center',
          padding: '40px 20px',
          backgroundColor: '#0d47a1',
          color: '#fff',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Contact Us
        </Typography>
        <Typography>
          <LocationOn /> Venue: KICC, Nairobi
        </Typography>
        <Typography>
          <Event /> Date: 1st - 3rd March 2024
        </Typography>
        <Typography>
          <ContactMail /> Email: info@exploreeducationafrica.com  | Phone: +254  727 815 187
        </Typography>
      </Box>
    </Box>
  );
};

export default ExhibitionPage;

