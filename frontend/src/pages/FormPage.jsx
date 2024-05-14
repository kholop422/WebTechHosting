import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FormPage = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [contact, setContact] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [certifications, setCertifications] = useState("");
  const [projects, setProjects] = useState("");
  const [languages, setLanguages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", photo);
    formData.append("contact", contact);
    formData.append("education", education);
    formData.append("experience", experience);
    formData.append("skills", skills);
    formData.append("certifications", certifications);
    formData.append("projects", projects);
    formData.append("languages", languages);

    try {
      await axios.post("/api/cvs", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
        },
      });
      alert("CV submitted successfully!");
      // Reset form fields after submission
      setName("");
      setPhoto(null); // Reset photo state to null
      setContact("");
      setEducation("");
      setExperience("");
      setSkills("");
      setCertifications("");
      setProjects("");
      setLanguages("");
    } catch (error) {
      console.error("Error submitting CV:", error);
      alert("Error submitting CV. Please try again later.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={topLinksContainer}>
        <Link to="/" style={linkStyle}>
          Main Page
        </Link>
        <Link to="/search" style={linkStyle}>
          Search Page
        </Link>
      </div>

      <div style={formContainer}>
        <h1>CV Form</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Photo:</label>
            <input
              name="photo"
              id="photo"
              type="file"
              accept="image/*"
              onChange={(e) => {
                setPhoto(e.target.files[0]);
              }}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Contact:</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Education:</label>
            <textarea
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              style={inputStyle}
            ></textarea>
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Experience:</label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              style={inputStyle}
            ></textarea>
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Skills:</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Certifications:</label>
            <textarea
              value={certifications}
              onChange={(e) => setCertifications(e.target.value)}
              style={inputStyle}
            ></textarea>
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Projects:</label>
            <textarea
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
              style={inputStyle}
            ></textarea>
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Languages:</label>
            <input
              type="text"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: "center",
  padding: "20px",
};

const topLinksContainer = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
};

const linkStyle = {
  marginRight: "20px",
  textDecoration: "none",
  color: "#007bff",
  fontSize: "1.2rem",
  fontWeight: "bold",
};

const formContainer = {
  maxWidth: "500px",
  margin: "0 auto",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const inputGroupStyle = {
  marginBottom: "20px",
  textAlign: "left", // Align label and input to the left
};

const labelStyle = {
  display: "block", // Display label as block element for vertical alignment
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default FormPage;
