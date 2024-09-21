
import  { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setEmployees(data.results);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch employee data", err);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <div>Loading employees...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Employee List</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {employees.map((employee, index) => (
          <EmployeeCard key={index} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
