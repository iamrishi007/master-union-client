import { useState } from "react";
import { useDispatch } from "react-redux";
import { createLead } from "../../features/leads/leadSlice";

export default function LeadForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createLead({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem", background: "var(--card-bg)", padding: "1rem", borderRadius: "8px" }}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ marginRight: "0.5rem", padding: "0.5rem" }} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginRight: "0.5rem", padding: "0.5rem" }} />
      <button type="submit">Add Lead</button>
    </form>
  );
}
