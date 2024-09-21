

const EmployeeCard = ({ employee }) => {
    
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={employee.picture.medium} alt={employee.name.first} />
      <h3>
        {employee.name.first} {employee.name.last}
      </h3>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      
    </div>
  );
};

export default EmployeeCard;







