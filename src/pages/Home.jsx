import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#0d1117",
      color: "#c9d1d9",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#1f6feb", fontSize: "3rem", marginBottom: "1rem" }}>
        Next-Gen CRM Platform
      </h1>
      <h2 style={{ color: "#58a6ff", fontSize: "1.5rem", marginBottom: "2rem" }}>
        Streamline Your Sales & Customer Workflows
      </h2>

      <p style={{ maxWidth: "600px", lineHeight: "1.6", fontSize: "1rem", marginBottom: "2rem" }}>
        Take control of your sales pipeline with our modern CRM solution. Track leads, automate follow-ups, 
        and collaborate with your team in real-time. Designed for fast-growing startups, our platform 
        gives you actionable insights and smooth workflows — all in one place. Build, scale, and manage 
        customer relationships efficiently.
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <Link to="/login">
          <button style={{
            padding: "0.75rem 2rem",
            background: "#1f6feb",
            color: "#fff",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseOver={e => e.target.style.background="#1580d6"}
          onMouseOut={e => e.target.style.background="#1f6feb"}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button style={{
            padding: "0.75rem 2rem",
            background: "#0a3d62",
            color: "#fff",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseOver={e => e.target.style.background="#08325a"}
          onMouseOut={e => e.target.style.background="#0a3d62"}
          >
            Register
          </button>
        </Link>
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem", maxWidth: "500px" }}>
        New to the platform? <Link to="/register" style={{ color: "#58a6ff" }}>Create an account</Link> and start managing your leads today.
      </p>
    </div>
  );
}
