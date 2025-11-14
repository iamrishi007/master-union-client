export default function LeadList({ leads }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
      {leads.map((lead) => (
        <div key={lead._id} style={{ background: "var(--card-bg)", padding: "1rem", borderRadius: "8px" }}>
          <h4>{lead.name}</h4>
          <p>{lead.email}</p>
        </div>
      ))}
    </div>
  );
}
