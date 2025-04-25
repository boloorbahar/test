import { Skeleton } from "antd";

const Loading = () => {
  return (
    <div className="flex flex-col space-y-5 m-5">
      <Skeleton.Input block size="large" />
      <Skeleton.Input block size="large" />
      <Skeleton.Input block size="large" />
    </div>
  );
};
export default Loading;
