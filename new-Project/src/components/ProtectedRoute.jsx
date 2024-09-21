
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
