import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(form)).unwrap();
      // Successful login will set token in Redux
      navigate("/dashboard"); // redirect to dashboard
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  // Optional: If user is already logged in, redirect immediately
  useEffect(() => {
    if (token) navigate("/dashboard");
  }, [token, navigate]);

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
        <h2 style={{ color: "#1f6feb", marginBottom: "1.5rem" }}>Login</h2>

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
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#1f6feb" }}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
