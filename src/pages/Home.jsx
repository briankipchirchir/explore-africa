import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Typography, Container, Box, Grid, Button } from "@mui/material";
import NewsletterSignup from "../components/NewsletterSignup";
import KeynoteSpeakers from '../components/Keynote';
import Feedback from "../components/Feedback";
import { keyframes } from "@emotion/react";
import ExploreIcon from "@mui/icons-material/Explore";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BlogSection from './BlogSection.jsx';


// Fade-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Slide-in animation
const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Helper function to format time into days and hours
const formatTime = (time) => {
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time % (24 * 3600)) / 3600);
  return `${days}d ${hours}h`;
};

// Letter-by-Letter animation
const Letter = ({ children, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: 0.3 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.span>
  );
};

const HomePage = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const eventDate = new Date('2025-02-14T00:00:00'); 
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = eventDate - currentTime;
      if (timeDifference <= 0) {
        clearInterval(interval);
      } else {
        setTimeRemaining(timeDifference / 1000); // Convert to seconds
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const welcomeText = "Welcome to Explore Education";

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: 'url("https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/35/39/65.jpg") no-repeat center center',
          backgroundSize: 'cover',
          height: '80vh',
          width: '100%',
          margin: '0 auto',
          borderRadius: '10px',
          boxShadow: 3,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)', 
            zIndex: 1,
          }}
        />

        {/* Welcome Text with Letter-by-Letter Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          style={{
            zIndex: 2,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'pre-wrap', // Ensures spaces between words are maintained
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: 'Arial, sans-serif' }}>
            {welcomeText.split(' ').map((word, wordIndex) => (
              <span key={wordIndex}>
                {word.split('').map((letter, index) => (
                  <Letter key={index} delay={(wordIndex * 0.5) + (index * 0.1)}>
                    {letter}
                  </Letter>
                ))}
                {' '}
              </span>
            ))}
          </Typography>
        </motion.div>

        {/* Countdown and Register Button */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            textAlign: 'center',
            width: '100%',
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Countdown Timer */}
            <Typography variant="h5" sx={{ color: 'white', marginBottom: '20px' }}>
              Event Starts In: {formatTime(timeRemaining)}
            </Typography>

            {/* Register Button */}
            <Button
      variant="contained"
      sx={{
        backgroundColor: '#00796b',
        color: 'white',
        padding: '10px 20px',
        fontSize: '1rem',
        textTransform: 'none',
        borderRadius: '8px',
        boxShadow: 2,
        '&:hover': {
          backgroundColor: '#004d40',
        },
      }}
      onClick={() => navigate('/register')} // Navigates to the Register page
    >
      Register Now
    </Button>
          </motion.div>
        </Box>
      </motion.div>
      {/* Explore Education Resources Section */}
      <Container sx={{ padding: 4, marginBottom: 4 }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}>
            Explore Education Resources
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
          The ever evolving and dynamic world industries create exciting work and career opportunities but come with challenges; jobs without people with right skills and workforce with a shortfall in industry knowledge. Career seekers also find it challenging to identify the right and relevant career programme for themselves – they need experts. To remain competitive students, graduates, employees, and job seekers need to enhance their skills and abilities to merge to industry demands and hence need for continued career and professional development.
          </Typography>
        </motion.div>
      </Container>

      {/* Career Development Section with Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          background: 'url("https://exploreeducationafrica.com/wp-content/uploads/2023/06/educ-2-1024x819.jpg") no-repeat center center',
          backgroundSize: 'cover',
          height: '60vh',
          width: '60%',
          margin: '0 auto',
          marginBottom: 4,
          borderRadius: '10px',
          boxShadow: 3,
        }}
      />

      {/* Career Point Section */}
      <Container sx={{ padding: 4, marginBottom: 4 }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}>
            Career Point
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
          NISCPE 2023 is a unique effort to bring career seekers, students, graduates, job seekers and school leavers to engage in contact with professional skills providers, potential employers, government & support agencies, educators and professional bodies to equip them with information and practical skills and guide their decision making about future careers.

The event will attract over 10,000 visitors; industry leaders, experts and top education providers, students from public and private universities, and schools, graduates, job seekers, youths and school leavers and HR managers from leading corporates to attend the 3-day exhibition that will be held at KICC grounds.
          </Typography>
        </motion.div>
      </Container>

      {/* Expanding Career Horizons Section with Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        style={{
          background: 'url("https://exploreeducationafrica.com/wp-content/uploads/2023/06/EDUT-1024x530.jpg") no-repeat center center',
          backgroundSize: 'cover',
          height: '60vh',
          width: '60%',
          margin: '0 auto',
          marginBottom: 4,
          borderRadius: '10px',
          boxShadow: 3,
        }}
      />

      <NewsletterSignup /> {/* Added NewsletterSignup Component */}

     

      {/* Expo in Kenya Section */}
      <Container sx={{ padding: 4, marginBottom: 4 }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}>
          The professional Skills Training & Career pathways Expo
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
          Involves 50+ exhibitors participating and promoting their diverse range of career and employment pathways to the visitors. Exhibitors range from universities education providers, government agencies, overseas education agencies, registered training organizations, professional skills training consultants, HR Consultants industry, local and international professional skills examination bodies and prospective employers under one roof to provide visitors with a unique opportunity to investigate, learn and discover future career pathway, training and employment opportunities and study options. The visitors will get to see firsthand techniques and tools involved with a variety of skills and trades and learn about the pathways they can take through available courses and employment options.
          </Typography>
        </motion.div>
      </Container>

      {/* Showcase Your Potential Section with Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        style={{
          background: 'url("https://exploreeducationafrica.com/wp-content/uploads/2023/06/ert6.jpg") no-repeat center center',
          backgroundSize: 'cover',
          height: '60vh',
          width: '60%',
          margin: '0 auto',
          marginBottom: 4,
          borderRadius: '10px',
          boxShadow: 3,
        }}
      />

      {/* Professional Career Services Section */}
      <Container sx={{ padding: 4, marginBottom: 4 }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}>
            Professional Career Services
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
          Information on professional courses, local and international examination bodies, apprenticeships, trainee-ships, certificate courses, employment opportunities and hand-skills on innovative and entrepreneurship skills will be presented through various seminars and exhibits throughout the 3-day exhibition. The event will therefore offer a wealth of information for schools, graduates, students and job seekers including;

Leading professional skills and certification courses in various fields; Finance & Accounting, insurance, ICT, Tourism & Hospitality and Management and many more
Access to the latest careers, course study programs and employment options
Advise on study programs and professional skills enrollment procedures
Talk to prospective employers
Compare career programs from different providers
Meet local and international examination bodies
Domain names & professional email
Under the theme Fostering Talent and Work Skills through Professional Training, Innovation and Entrepreneurship, Career specific workshop and seminars will be organized to cater for the needs of careers seekers who are starting, changing or upgrading their careers in different fields.
          </Typography>
        </motion.div>
      </Container>

      {/* Career Icons with Slide-in Animation */}
      <Container sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <ExploreIcon sx={{ fontSize: 50, color: '#00796b' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  Career Exploration
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Discover a wide range of career opportunities and industry insights.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <SchoolIcon sx={{ fontSize: 50, color: '#00796b' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  Education & Training
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Explore educational pathways and career advancement programs.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 1.4 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <WorkIcon sx={{ fontSize: 50, color: '#00796b' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  Job Opportunities
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                  Access exclusive job listings and career development resources.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
 

<BlogSection/>


      {/* Contact and Feedback Section */}
      <Feedback />
    </div>
  );
};

export default HomePage;
