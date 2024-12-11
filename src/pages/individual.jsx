import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, FormGroup, Select, MenuItem, InputLabel, FormControl, Box, Typography } from "@mui/material";

const VisitorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    visitDate: "",
    groupParticipation: false,
    groupContact: "",
    groupContactPhone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value !== undefined ? value : checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      name,
      phoneNumber,
      visitDate,
      groupParticipation,
      groupContact,
      groupContactPhone,
    } = formData;

    if (
      !email ||
      !name ||
      !phoneNumber ||
      !visitDate ||
      (groupParticipation && (!groupContact || !groupContactPhone))
    ) {
      alert("Please fill in all required fields.");
    } else {
      alert("Thank you for registering as a visitor! We look forward to your attendance.");
      setIsSubmitted(true);
    }
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: "auto", backgroundColor: "#f4f6f8", borderRadius: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        The Nairobi International Skills & Career Pathways Expo 2025 - Visitor Registration
      </Typography>
      <Typography variant="body1" paragraph>
        The NISCPE 2025 will take place on 14th – 16th February, 2025 at the Absa Sports ground, Ruaraka, off Thika road.
        Please provide your details below to help us plan the event and career workshops.
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />

        <TextField
          label="Name"
          type="text"
          fullWidth
          required
          margin="normal"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />

        <TextField
          label="Phone Number"
          type="tel"
          fullWidth
          required
          margin="normal"
          value={formData.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
        />

        <FormControl fullWidth margin="normal" required>
          <InputLabel>Select the day you will attend</InputLabel>
          <Select
            label="Select the day you will attend"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleChange}
          >
            <MenuItem value="">--Select a Date--</MenuItem>
            <MenuItem value="February 14th, 2025">February 14th, 2025</MenuItem>
            <MenuItem value="February 15th, 2025">February 15th, 2025</MenuItem>
            <MenuItem value="February 16th, 2025">February 16th, 2025</MenuItem>
          </Select>
        </FormControl>

        <FormGroup margin="normal">
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.groupParticipation}
                onChange={handleChange}
                name="groupParticipation"
              />
            }
            label="Participating as a group/school?"
          />
        </FormGroup>

        {formData.groupParticipation && (
          <>
            <TextField
              label="Group/School Contact Name"
              type="text"
              fullWidth
              required
              margin="normal"
              value={formData.groupContact}
              name="groupContact"
              onChange={handleChange}
            />

            <TextField
              label="Group/School Contact Phone"
              type="tel"
              fullWidth
              required
              margin="normal"
              value={formData.groupContactPhone}
              name="groupContactPhone"
              onChange={handleChange}
            />
          </>
        )}

        <Typography variant="body2" paragraph>
          For any clarification, send an email to info@exploreeducationafrica.com
        </Typography>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "12px", marginTop: 2 }}
        >
          Register Now
        </Button>
      </form>

      {isSubmitted && (
        <Box sx={{ marginTop: 4, textAlign: "center" }}>
          <Typography variant="h6">Thank you for registering as a visitor!</Typography>
          <Typography variant="body1">We look forward to your attendance.</Typography>
        </Box>
      )}
    </Box>
  );
};

export default VisitorRegistrationForm;




