import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exhibition from './pages/Exhibition';
import Register from './pages/Register';
import Sponsorship from './pages/Sponsorship';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ExpoPage from './pages/Expo';
import ExhibitionPage from './pages/Exhibition';
import Programme from './pages/Expo';
import BlogDetails from './pages/BlogDetails';
import VisitorRegistrationForm from './pages/individual';
import ExhibitorRegistrationForm from './pages/institution';
import KeynoteSpeakers from './components/Keynote';


const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/exhibition" element={<ExhibitionPage/>}/>
          <Route path="/speaker" element={<KeynoteSpeakers/>}/>

          <Route path="/register" element={<Register />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/expo" element={<ExpoPage/>}/>
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/visitor" element={<VisitorRegistrationForm/>}/>
          <Route path="/institution" element={<ExhibitorRegistrationForm/>}/>

        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
