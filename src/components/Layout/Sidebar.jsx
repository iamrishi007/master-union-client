import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: "250px", background: "var(--secondary-bg)", height: "100vh", padding: "1rem", color: "var(--text-color)" }}>
      <h2 style={{ color: "var(--primary-color)" }}>CRM</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/leads">Leads</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}
