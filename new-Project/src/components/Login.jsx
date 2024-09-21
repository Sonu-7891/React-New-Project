// src/components/Login.js
import  { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Input, Text, VStack } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to log in. Please check your credentials.", err);
    }
  };

  return (
    <VStack spacing={4} mt={10}>
      <Text fontSize="2xl">Login to EMS</Text>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Text color="red.500">{error}</Text>}
      <Button onClick={handleLogin} colorScheme="teal">
        Login
      </Button>
    </VStack>
  );
};

export default Login;
