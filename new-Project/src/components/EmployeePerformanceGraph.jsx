// src/components/EmployeePerformanceGraph.jsx (or where your graph component is defined)
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the required components for the chart
ChartJS.register(
  CategoryScale, // Register the category scale
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmployeePerformanceGraph = () => {
  const data = {
    labels: ["Employee A", "Employee B", "Employee C"],
    datasets: [
      {
        label: "Performance",
        data: [65, 59, 80],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default EmployeePerformanceGraph;
