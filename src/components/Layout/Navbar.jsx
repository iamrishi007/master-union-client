import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "var(--secondary-bg)" }}>
      <h2 style={{ color: "var(--primary-color)" }}>CRM Dashboard</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
