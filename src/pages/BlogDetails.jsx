import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import blogData from '../data/blogData';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <Container sx={{ paddingY: 6, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ color: 'red', fontWeight: 500 }}>
          Blog post not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ paddingY: 6 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          marginBottom: 3,
          color: '#333',
          lineHeight: 1.4,
        }}
      >
        {blog.title}
      </Typography>
      <Box
        component="img"
        src={blog.image}
        alt={blog.title}
        sx={{
          width: '100%',
          height: 'auto',
          borderRadius: 2,
          marginBottom: 4,
          boxShadow: 3, // Adding a slight shadow for a more polished look
        }}
      />
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.8,
          color: '#555',
          fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
          textAlign: 'justify', // Make text justified for better readability
        }}
      >
        {blog.content}
      </Typography>
    </Container>
  );
};

export default BlogDetails;
