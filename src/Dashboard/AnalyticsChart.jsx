import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnalyticsChart({ data }) {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: "Leads",
        data: data.map(item => item.value),
        backgroundColor: "var(--primary-color)",
      },
    ],
  };

  return <Bar data={chartData} />;
}
