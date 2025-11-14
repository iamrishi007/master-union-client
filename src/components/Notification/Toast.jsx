import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Toast() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    socket.on("newActivity", (activity) => {
      setMessage(`New ${activity.type} added to lead ${activity.leadId}`);
      setTimeout(() => setMessage(null), 4000);
    });
  }, []);

  if (!message) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "var(--primary-color)",
      padding: "1rem",
      borderRadius: "8px",
      color: "#fff",
      zIndex: 1000
    }}>
      {message}
    </div>
  );
}
