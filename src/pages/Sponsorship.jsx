import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Card, CardContent } from '@mui/material';
import { Star, StarBorder, VerifiedUser } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sponsorship = () => {
  const navigate=useNavigate();
  return (
    <Box sx={{ padding: '40px 0', backgroundColor: '#f7f7f7' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative', 
          height: '400px', 
          backgroundImage: 'url(https://media.istockphoto.com/id/881120664/photo/become-a-sponsor-written-on-business-card.jpg?s=2048x2048&w=is&k=20&c=G5ggajtZYYBBBwP4TKd3sby8nuGwomvU94zBlp6ucB0=)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          borderRadius: '8px',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Box sx={{ color: '#fff', fontWeight: 600 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              marginBottom: '20px' ,
              color:'black'

            }}
          >
          
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              marginTop: '20px', 
              backgroundColor: 'green', 
              color: '#fff', 
              '&:hover': { backgroundColor: 'darkgreen' },
              padding: '12px 24px',
              fontSize: '16px'
            }}
            onClick={()=>navigate('/register')}
          >
            Register Now
          </Button>
        </Box>
      </Box>
{/* Sponsors/Partners Logos Section */}
<Container sx={{ marginBottom: '40px' }}>
  <Typography 
    variant="h4" 
    sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}
  >
    Our Sponsors & Partners
  </Typography>
  <Grid container spacing={2} justifyContent="center">
    {/* Example logos */}
    <Grid item xs={6} sm={4} md={2}>
      <Paper 
        elevation={3} 
        sx={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '120px', // Increased height
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}
      >
        <img 
          src="https://www.absabank.co.ke/content/dam/kenya/absa/logos/absa-logo-bg.png" 
          alt="Sponsor 1" 
          style={{ maxWidth: '100%', maxHeight: '100%' }} // Ensures responsive scaling
        />
      </Paper>
    </Grid>
    <Grid item xs={6} sm={4} md={2}>
      <Paper 
        elevation={3} 
        sx={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '120px', // Increased height
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}
      >
        <img 
          src="https://scontent.fnbo2-1.fna.fbcdn.net/v/t39.30808-6/464712070_8760893703994104_5134385287217338134_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHJotmjxyQoMKj5P4KU7vu-o4cipYZEy--jhyKlhkTL75GDpZnJCR6ly_oOV3DF3pcsRwNy5Zet_-GOS3Yav4Dy&_nc_ohc=zPgNhBRlC68Q7kNvgHf1A5X&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=AiM3NsAAbS03CIw5Gj4autu&oh=00_AYBYMax1X0zz4xbYXcgPNAD8bCflk3mwFCLgUi2hkvD2Vg&oe=675A1DD6" 
          alt="Sponsor 2" 
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </Paper>
    </Grid>
    <Grid item xs={6} sm={4} md={2}>
      <Paper 
        elevation={3} 
        sx={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '120px', // Increased height
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}
      >
        <img 
          src="https://katti.co.ke/wp-content/uploads/2020/12/cropped-cropped-favicon-2048x1292.png" 
          alt="Sponsor 3" 
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </Paper>
    </Grid>
    {/* Add more logos as needed */}
  </Grid>
</Container>


      {/* Sponsorship Information */}
      <Container>
        <Typography variant="h3" sx={{ fontWeight: 600, marginBottom: '20px' }}>
          Why Sponsor?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '30px', lineHeight: 1.8 }}>
          The event organizers have recognized that each institution, firm, or organization has a unique brand message, career development objectives, and vision. Each sponsorship has been packaged to meet your corporate strategy. Each package offers different levels of exposure, prime exhibition spots, workshop presentations, and premium branding.
        </Typography>

        {/* Sponsorship Packages */}
        <Grid container spacing={4} sx={{ marginBottom: '40px' }}>
          {/* Gold Package */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: '20px', boxShadow: 6, borderRadius: '8px', backgroundColor: '#FFF9E6' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#FFD700' }}>
                  <Star sx={{ fontSize: '20px', verticalAlign: 'middle', marginRight: '8px' }} /> 
                  Gold Sponsorship
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '20px' }}>
  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
    <li>Four Sessions to Career Workshops</li>
    <li>Corporate Sponsored visitors Lunch for two days</li>
    <li>Premier Company Table & Banner Location across from student check-in</li>
    <li>Featured advert on event magazine</li>
    <li>Featured company logo on event marketing banners at the event</li>
    <li>Brand the Students Workshop Hall</li>
    <li>Exhibition booth measuring 16m²</li>
  </ul>
</Typography>

                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Price: Shs. 580,000
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Silver Package */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: '20px', boxShadow: 6, borderRadius: '8px', backgroundColor: '#F2F2F2' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#C0C0C0' }}>
                  <StarBorder sx={{ fontSize: '20px', verticalAlign: 'middle', marginRight: '8px' }} /> 
                  Silver Sponsorship
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '20px' }}>
  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
    <li>Three Sessions to Career Workshops</li>
    <li>Company Display Table & Banner</li>
    <li>Preferred Positioning</li>
    <li>Full page advert on event magazine</li>
    <li>Featured company logo on event marketing banners at the event</li>
    <li>Exhibition booth measuring 12m²</li>
  </ul>
</Typography>

                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Price: Shs. 348,000
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Bronze Package */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: '20px', boxShadow: 6, borderRadius: '8px', backgroundColor: '#FFF4E6' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#cd7f32' }}>
                  <VerifiedUser sx={{ fontSize: '20px', verticalAlign: 'middle', marginRight: '8px' }} /> 
                  Bronze Sponsorship
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '20px' }}>
  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
    <li>Two Sessions to Career Workshops</li>
    <li>Full page advert on event magazine</li>
    <li>Featured company logo on event marketing banners at the event</li>
    <li>Exhibition booth measuring 9m²</li>
  </ul>
</Typography>

                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Price: Shs. 255,000
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Sponsors & Advertisements */}
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: '20px' }}>
          Sponsors & Advertisements
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          The cost of advertising in the event A4 size magazine is Shs. 81,200 for a full-page color advert and Shs. 58,000 for a half-page color advert.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          The cost of a separate 3M x 3M booth is Shs. 116,000.
        </Typography>

        {/* Important Info Section */}
        <Box sx={{ backgroundColor: '#E8F8F5', padding: '20px', borderRadius: '8px' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Important Info:
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            - Career sessions will be allocated across the 3-day event to accommodate all sponsors.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            - All activities of corporate sponsors will be prominently showcased to other sponsors, job seekers, and guests.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Sponsorship;
