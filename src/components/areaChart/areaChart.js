import { Area } from "@ant-design/plots";

const AreaChart = () => {
  const config = {
    height: 220,
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/stocks.json",
      transform: [{ type: "filter", callback: (d) => d.symbol === "GOOG" }],
    },
    // xField: (d) => new Date(d.date),
    yField: "price",
    style: {
      fill: "linear-gradient(-90deg, #1E1E1E 0%, #2D2141 100%)",
    },
    axis: {
      x: {
        labelFill: "#fff",
      },
      y: {
        labelFormatter: "~s",
        labelFill: "#fff",
      },
    },
    line: {
      style: {
        stroke: "#625B71",
        strokeWidth: 2,
      },
    },
  };
  return <Area {...config} />;
};

export default AreaChart;
