import { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeads = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // redirect if not logged in
        return;
      }

      try {
        const res = await API.get("/leads");
        setLeads(res.data.leads || res.data);
      } catch (err) {
        console.error("Failed to fetch leads:", err);
        setError(err.response?.data || "Unauthorized or something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, [navigate]);

  if (loading) return <p>Loading leads...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem", minHeight: "100vh", background: "#0d1117", color: "#c9d1d9" }}>
      <h1 style={{ color: "#1f6feb" }}>Leads Dashboard</h1>
      {leads.length === 0 ? (
        <p>No leads available</p>
      ) : (
        <ul>
          {leads.map((lead) => (
            <li key={lead._id}>
              {lead.name} — {lead.email} — {lead.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
