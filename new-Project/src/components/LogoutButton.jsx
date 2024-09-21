
import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <Button onClick={handleLogout} colorScheme="red">
      Logout
    </Button>
  );
};

export default LogoutButton;
