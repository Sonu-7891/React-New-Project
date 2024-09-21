import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase"; 

export const Navbar = () => {

  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await auth.signOut(); 
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/EmployeeList">Empolyee</Link>
      </div>
      <div>
        <Link to="/EmployeeCard">EmpolyeeCard</Link>
      </div>
      <div>
        <Link to="/Dashboard">Dashboard</Link>
      </div>

      <div>
        {user ? (
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};
