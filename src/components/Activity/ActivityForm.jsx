import { useState } from "react";
import { useDispatch } from "react-redux";
import { createActivity } from "../../features/activities/activitySlice";
import io from "socket.io-client";

let socket = io("http://localhost:5000");

export default function ActivityForm({ leadId }) {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Note");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = { leadId, type, description, date: new Date() };
    dispatch(createActivity({ leadId, activity: newActivity }));

    // Emit to socket
    socket.emit("addActivity", { leadId, activity: newActivity });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem", background: "var(--card-bg)", padding: "1rem", borderRadius: "8px" }}>
      <select value={type} onChange={(e) => setType(e.target.value)} style={{ marginRight: "0.5rem", padding: "0.5rem" }}>
        <option>Note</option>
        <option>Call</option>
        <option>Meeting</option>
      </select>
      <input
        type="text"
        placeholder="Activity description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem", width: "300px" }}
      />
      <button type="submit">Add Activity</button>
    </form>
  );
}
