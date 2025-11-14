import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roles }) {
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If roles are defined and user role is not allowed, redirect to home
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  // Otherwise, render the child component
  return children;
}
