
import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, FormHelperText } from "@mui/material";

const ExhibitorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    institutionName: "",
    institutionEmail: "",
    telephone: "",
    participationType: "",
    contactPersonName: "",
    contactPersonEmail: "",
    contactPersonTelephone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      institutionName,
      institutionEmail,
      telephone,
      participationType,
      contactPersonName,
      contactPersonEmail,
      contactPersonTelephone,
    } = formData;

    if (
      !institutionName ||
      !institutionEmail ||
      !telephone ||
      !participationType ||
      !contactPersonName ||
      !contactPersonEmail ||
      !contactPersonTelephone
    ) {
      alert("Please fill in all required fields.");
    } else {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzSeA32FeVEw6EE28-FKrWfqEun6yd9wR8rmQFfZrE/dev", // Your Google Apps Script URL
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          alert("Form submitted successfully!");
          setIsSubmitted(true);
        } else {
          alert("Error submitting form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting data.");
      }
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center" }}>The Nairobi International Skills & Career Pathways Expo 2025 - Exhibitor Registration</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name of the Institution"
          name="institutionName"
          value={formData.institutionName}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Institution Email Address"
          name="institutionEmail"
          value={formData.institutionEmail}
          onChange={handleChange}
          type="email"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          type="tel"
          fullWidth
          required
          margin="normal"
        />

        <FormControl fullWidth margin="normal" required>
          <InputLabel>Participation Type</InputLabel>
          <Select
            name="participationType"
            value={formData.participationType}
            onChange={handleChange}
            label="Participation Type"
          >
            <MenuItem value="Exhibition">Exhibition</MenuItem>
            <MenuItem value="Advertisement on event magazine">Advertisement on event magazine</MenuItem>
            <MenuItem value="Both exhibition and advertisement">Both exhibition and advertisement</MenuItem>
            <MenuItem value="Sponsorship">Sponsorship</MenuItem>
          </Select>
          <FormHelperText>Choose participation type</FormHelperText>
        </FormControl>

        <TextField
          label="Contact Person's Name"
          name="contactPersonName"
          value={formData.contactPersonName}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Contact Person's Email"
          name="contactPersonEmail"
          value={formData.contactPersonEmail}
          onChange={handleChange}
          type="email"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Contact Person's Telephone"
          name="contactPersonTelephone"
          value={formData.contactPersonTelephone}
          onChange={handleChange}
          type="tel"
          fullWidth
          required
          margin="normal"
        />

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <strong>For any clarification, send an email to info@exploreeducationafrica.com</strong>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            style={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Register Now
          </Button>
        </div>
      </form>

      {isSubmitted && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>Thank you for registering as an exhibitor!</h3>
          <p>We will get in touch soon.</p>
        </div>
      )}
    </div>
  );
};

export default ExhibitorRegistrationForm;
