import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CelebrationIcon from "@mui/icons-material/Celebration";
import AOS from "aos";
import Countdown from 'react-countdown';
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Programme = () => {
  const navigate=useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  const schedule = [
    {
      day: "Day 1: 14th February 2025",
      morning: [
        { time: "9:00 AM", event: "Exhibition Opens to the Public", icon: <EventIcon /> },
        { time: "9:30 AM", event: "Official Opening by Guest Speaker", icon: <CelebrationIcon /> },
        { time: "10:00 AM", event: "Sponsors’ Session: Enhancing professional/skills career development (Speaker: TBC)", icon: <WorkOutlineIcon /> },
        { time: "10:30 AM", event: "Panel Discussion", icon: <ScheduleIcon /> },
        { time: "11:30 AM", event: "Coffee Break/Visiting Exhibition Stands", icon: <CoffeeIcon /> },
      ],
      afternoon: [
        { time: "2:00 PM", event: "WORKSHOP ONE: Career Specific (TBC)", icon: <WorkOutlineIcon /> },
        { time: "2:00 PM", event: "WORKSHOP TWO: Career Specific (TBC)", icon: <WorkOutlineIcon /> },
      ],
    },
    {
      day: "Day 2: 15th  February 2025",
      morning: [
        { time: "9:00 AM", event: "Exhibition Opens to the Public", icon: <EventIcon /> },
        { time: "10:00 AM", event: "Sponsors’ Session: Need for Professional Development on Various Industry Workers (Speaker: TBC)", icon: <WorkOutlineIcon /> },
        { time: "10:30 AM", event: "Panel Discussion", icon: <ScheduleIcon /> },
        { time: "11:30 AM", event: "Coffee Break/Visiting Exhibition Stands", icon: <CoffeeIcon /> },
      ],
      afternoon: [
        { time: "2:00 PM", event: "WORKSHOP ONE: Sponsor’s Choice", icon: <WorkOutlineIcon /> },
        { time: "2:00 PM", event: "WORKSHOP TWO: Sponsor’s Choice", icon: <WorkOutlineIcon /> },
      ],
    },
    {
      day: "Day 3: 16th February 2025",
      morning: [
        { time: "9:00 AM", event: "Exhibition Opens to the Public", icon: <EventIcon /> },
        { time: "10:00 AM", event: "Sponsors’ Networking Session (Speaker: TBC)", icon: <WorkOutlineIcon /> },
        { time: "10:30 AM", event: "Panel Discussion", icon: <ScheduleIcon /> },
        { time: "11:30 AM", event: "Coffee Break/Visiting Exhibition Stands", icon: <CoffeeIcon /> },
      ],
      afternoon: [
        { time: "2:00 PM", event: "WORKSHOP ONE: Career Specific (TBC)", icon: <WorkOutlineIcon /> },
        { time: "2:00 PM", event: "WORKSHOP TWO: Career Specific (TBC)", icon: <WorkOutlineIcon /> },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Nairobi International Skills Expo 2024</title>
        <meta
          name="description"
          content="Explore the full programme for the Nairobi International Skills Expo 2024, including workshops, networking sessions, and panel discussions."
        />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.6435-9/51078323_387072088522665_9071791478358933504_n.jpg?stp=c0.130.1728.902a_dst-jpg_s526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFc-MkZkrlYTmUjCER1nUHf8LAUisvZOu7wsBSKy9k67gh265RakFKssVgCT9gJK7Zyw8TRupTAOuod4nareb4D&_nc_ohc=hMiUCRUm6kYQ7kNvgEIrDJ_&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=A_aY7oyj3uPSaFrqKqBV52c&oh=00_AYCMFTuMcuRTqmungBczqj0YQnDIWQ-4W4FW6ebtMXp6gw&oe=67808C3A")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Nairobi International Skills Expo 2024
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', mt: 4, position: 'relative' }}>
  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#00695c' }}>
    Countdown to Event:
  </Typography>
  
  {/* Countdown Timer */}
  <Countdown
    date={new Date('2025-02-14T09:00:00')}
    renderer={({ days, hours, minutes, seconds }) => (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #004d40, #00695c)',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: 3,
        width: '300px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <Box sx={{ mr: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff' }}>
            {days}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Days
          </Typography>
        </Box>

        <Box sx={{ mr: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff' }}>
            {hours}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Hours
          </Typography>
        </Box>

        <Box sx={{ mr: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff' }}>
            {minutes}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Minutes
          </Typography>
        </Box>

        <Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff' }}>
            {seconds}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Seconds
          </Typography>
        </Box>
      </Box>
    )}
  />
</Box>


      {/* Programme Section */}
      <Box sx={{ mt: 5, px: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
          }}
        >
          Event Programme
        </Typography>

        {schedule.map((day, index) => (
          <Card
            key={index}
            sx={{
              mb: 4,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: index % 2 === 0 ? "#f1f8e9" : "#e3f2fd",
            }}
            data-aos="fade-up"
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                {day.day}
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    Morning Sessions
                  </Typography>
                  <List>
                    {day.morning.map((event, i) => (
                      <ListItem key={i}>
                        <ListItemIcon>{event.icon}</ListItemIcon>
                        <ListItemText primary={`${event.time} - ${event.event}`} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    Afternoon Sessions
                  </Typography>
                  <List>
                    {day.afternoon.map((event, i) => (
                      <ListItem key={i}>
                        <ListItemIcon>{event.icon}</ListItemIcon>
                        <ListItemText primary={`${event.time} - ${event.event}`} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          textAlign: "center",
          mt: 6,
          mb: 6,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Ready to Be Part of This Transformative Event?
        </Typography>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #00695c, #004d40)",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "20px",
            }}
            onClick={()=>navigate('/register')}
          >
            Register Now
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Programme;
