import { Area } from "@ant-design/plots";

const AreaChart = (data) => {
  const config = {
    height: 220,
    data: data?.data?.length > 0 ? data?.data : [],
    xField: (d) => new Date(d?.created_at),
    yField: "price_per_unit",
    style: {
      fill: "linear-gradient(-90deg, #1E1E1E 0%, #2D2141 100%)",
    },
    axis: {
      x: {
        labelFill: "#fff",
      },
      y: {
        labelFormatter: "",
        labelFill: "#fff",
      },
    },
    line: {
      tooltip: null,
      style: {
        stroke: "#625B71",
        strokeWidth: 2,
      },
    },
  };
  return <Area {...config} />;
};

export default AreaChart;
