// import { Link } from "react-router-dom";

// const MainPage = () => {
//   return (
//     <div>
//       <h1>Main Page</h1>
//       <ul>
//         <li>
//           <Link to="/form">Form Page</Link>
//         </li>
//         <li>
//           <Link to="/search">Search Page</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default MainPage;
import { Link } from "react-router-dom";

const MainPage = () => {
  const welcomeMessage = "Welcome! Upload your CV here:";

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={headerStyle}>
          <h1>Home Page</h1>
        </div>

        <div style={navBarStyle}>
          <Link to="/form" style={linkStyle}>
            Form Page
          </Link>
          <Link to="/search" style={linkStyle}>
            Search Page
          </Link>
        </div>

        <div style={welcomeContainerStyle}>
          <p>{welcomeMessage}</p>
          <Link to="/form">
            <button style={buttonStyle}>Upload CV</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const boxSize = 300; // Adjust the size of the square box
const boxStyle = {
  width: `${boxSize}px`,
  height: `${boxSize}px`,
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const headerStyle = {
  marginBottom: "20px",
};

const navBarStyle = {
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

const welcomeContainerStyle = {
  marginBottom: "20px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default MainPage;
