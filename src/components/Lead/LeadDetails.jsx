import ActivityTimeline from "../Activity/ActivityTimeline";
import ActivityForm from "../Activity/ActivityForm";

export default function LeadDetails({ lead }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3 style={{ color: "var(--primary-color)" }}>{lead.name}</h3>
      <p>{lead.email}</p>

      <ActivityForm leadId={lead._id} />
      <ActivityTimeline leadId={lead._id} />
    </div>
  );
}
