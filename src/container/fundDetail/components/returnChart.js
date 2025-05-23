import { Skeleton } from "antd";
import AreaChart from "components/areaChart/areaChart";

const ReturnChart = ({ data, chartData, loading }) => {
  return (
    <div className="rounded-xl bg-[#0F0F0F] border border-[#58545f] px-6 py-3 mt-8">
      <div className="rounded-md border border-[#65558F] py-2 px-5 flex items-center justify-between text-white font-normal text-sm leading-6">
        <span> Total Return</span>
        <span
          className={
            data?.total_return.includes("-")
              ? "text-[#FB4162]"
              : "text-[#00A693]"
          }
        >
          {data?.total_return}{" "}
        </span>
      </div>
      <div className="mt-8">
        {loading ? <Skeleton /> : <AreaChart data={chartData} />}
      </div>
    </div>
  );
};
export default ReturnChart;
