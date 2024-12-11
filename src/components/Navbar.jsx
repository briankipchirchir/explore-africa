import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box,Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer } from '@mui/material';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#1976d2', boxShadow: 3 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="https://exploreeducationafrica.com/wp-content/uploads/2023/06/Log-bck-214x86.png" 
              alt="Explore Education Africa Logo" 
              style={{ height: '40px', marginRight: '10px' }} // Adjust size as needed
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
              Explore Education Africa
            </Typography>
          </Box>

          {/* Desktop View Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Button color="inherit" component={Link} to="/" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/exhibition" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
              Exhibition
            </Button>
            <Button color="inherit" component={Link} to="/programme" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
              Programme
            </Button>
            <Button color="inherit" component={Link} to="/sponsorship" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
              Sponsorship
            </Button>
            <Button color="inherit" component={Link} to="/speaker" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
              Speakers
            </Button>
            <Button color="inherit" component={Link} to="/register" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
              Register
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={toggleDrawer(false)}><CloseIcon /></Button>
          </Box>
          <Button fullWidth color="inherit" component={Link} to="/" onClick={toggleDrawer(false)}>
            Home
          </Button>
          <Button fullWidth color="inherit" component={Link} to="/exhibition" onClick={toggleDrawer(false)}>
            Exhibition
          </Button>
          <Button fullWidth color="inherit" component={Link} to="/programme" onClick={toggleDrawer(false)}>
            Programme
          </Button>
          <Button fullWidth color="inherit" component={Link} to="/sponsorship" onClick={toggleDrawer(false)}>
            Sponsorship
          </Button>
          <Button fullWidth color="inherit" component={Link} to="/register" onClick={toggleDrawer(false)}>
            Register
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
