import Chart from "react-apexcharts";

const RadialBar = ({ percent, color }) => {
  const series = [percent];
  const options = {
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%",
        },
      },
    },
    labels: ["Gastado"],
    chart: {
      foreColor: color,
    },
    colors: [color],
  };
  return (
    <div>
      <Chart options={options} type="radialBar" series={series} width="90%" />
    </div>
  );
};

export default RadialBar;
