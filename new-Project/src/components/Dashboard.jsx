
import { Box, Heading } from "@chakra-ui/react";

import EmployeePerformanceGraph from "./EmployeePerformanceGraph";
import LogoutButton from "./LogoutButton";

const Dashboard = () => {
  return (
    <Box p={6}>
      <Heading mb={6}>Employee Dashboard</Heading>
      <LogoutButton />
      <EmployeePerformanceGraph />
    </Box>
  );
};

export default Dashboard;
