import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../features/activities/activitySlice";
import io from "socket.io-client";

let socket;

export default function ActivityTimeline({ leadId }) {
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(fetchActivities(leadId));

    // Connect to backend socket
    socket = io("http://localhost:5000"); // replace with your backend

    socket.emit("joinLeadRoom", leadId);

    socket.on("newActivity", (activity) => {
      dispatch({ type: "activities/createActivity/fulfilled", payload: activity });
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, leadId]);

  return (
    <div style={{ background: "var(--card-bg)", padding: "1rem", borderRadius: "8px", marginTop: "1rem" }}>
      <h4 style={{ color: "var(--primary-color)" }}>Activity Timeline</h4>
      {activities.map((act) => (
        <div key={act._id} style={{ marginBottom: "0.5rem", borderBottom: "1px solid #333", paddingBottom: "0.5rem" }}>
          <p><strong>{act.type}</strong>: {act.description}</p>
          <p style={{ fontSize: "0.8rem", color: "#888" }}>{new Date(act.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
