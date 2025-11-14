import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "sales", // default role
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(form)).unwrap();
      navigate("/login"); // redirect to login after registration
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#161b22",
          padding: "2rem",
          borderRadius: "8px",
          color: "#c9d1d9",
          minWidth: "350px",
        }}
      >
        <h2 style={{ color: "#1f6feb", marginBottom: "1.5rem" }}>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "4px",
          }}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "4px",
          }}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "4px",
          }}
          required
        />

        {/* Role dropdown */}
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "4px",
            background: "#0d1117",
            color: "#c9d1d9",
          }}
        >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="sales">Sales</option>
        </select>

        {error && (
          <p style={{ color: "red", marginBottom: "1rem" }}>
            {error.message || error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.5rem 1rem",
            background: "#1f6feb",
            color: "#fff",
            borderRadius: "4px",
            width: "100%",
          }}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#1f6feb" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
