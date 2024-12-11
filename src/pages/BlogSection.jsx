import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogData";

const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingY: 6,
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically if needed
      }}
    >
      {/* Header for Latest Blog Section */}
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 4,
            textAlign: "center", // Center the header text
          }}
        >
          Latest Blogs
        </Typography>
      </Grid>

      {/* Blog Cards */}
      {blogData.map((blog) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={blog.id}
          sx={{
            display: "flex",
            justifyContent: "center", // Center card inside grid item
          }}
        >
          <Card
            sx={{
              maxWidth: 280, // Decreased maxWidth to make the cards smaller
              margin: "auto",
              borderRadius: 2,
              boxShadow: 2, // Lighter box shadow
              height: "100%", // Ensure the card takes full height in the grid
            }}
          >
            <CardMedia
              component="img"
              alt={blog.title}
              height="150" // Decreased image height
              image={blog.image}
              sx={{
                objectFit: "cover", // Prevent stretching of the image
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                {blog.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  marginTop: 1,
                  fontSize: "0.8rem", // Smaller font size
                }}
              >
                {blog.content.substring(0, 80)}...
              </Typography>
            </CardContent>
            <Button
              size="small"
              sx={{
                margin: "auto",
                display: "block",
                marginBottom: 1, // Smaller margin
                fontSize: "0.75rem", // Smaller button text
              }}
              onClick={() => handleReadMore(blog.id)}
            >
              Read More
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogSection;
