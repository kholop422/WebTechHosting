import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [cvs, setCvs] = useState([]);
  const [skills, setSkills] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/cvs?skills=${skills}`);
      setCvs(response.data);
    } catch (error) {
      console.error("Error searching CVs:", error);
    }
  };

  const handleClearResults = () => {
    setCvs([]); // Reset the results array to clear the displayed CVs
  };

  return (
    <div style={containerStyle}>
      <div style={topLinksContainer}>
        <Link to="/" style={linkStyle}>
          Main Page
        </Link>
        <Link to="/form" style={linkStyle}>
          Form Page
        </Link>
      </div>

      <div style={contentContainer}>
        <h1>CV Search</h1>
        <div style={searchBarStyle}>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter skills"
            style={inputStyle}
          />
          <button onClick={handleSearch} style={buttonStyle}>
            Search
          </button>
          <button onClick={handleClearResults} style={clearButtonStyle}>
            Clear Results
          </button>
        </div>

        <ul style={cvListStyle}>
          {cvs.map((cv) => (
            <li key={cv.id} style={cvItemStyle}>
              <h2>{cv.name}</h2>
              {cv.photo && (
                <img
                  src={`http://localhost:3000/${cv.photo}`}
                  alt={cv.name}
                  width={100}
                  height={100}
                />
              )}
              <p>Education: {cv.education}</p>
              <p>Experience: {cv.experience}</p>
              <p>Skills: {cv.skills}</p>
              <p>Certifications: {cv.certifications}</p>
              <p>Projects: {cv.projects}</p>
              <p>Languages: {cv.languages}</p>
            </li>
          ))}
        </ul>
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

const contentContainer = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const searchBarStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  marginRight: "10px",
  padding: "8px",
  fontSize: "1rem",
  border: "1px solid #ddd",
  borderRadius: "4px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: "10px",
};

const clearButtonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const cvListStyle = {
  listStyle: "none",
  padding: "0",
};

const cvItemStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export default SearchPage;
