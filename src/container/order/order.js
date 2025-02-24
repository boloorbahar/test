import { useSelector } from "react-redux";
import UserAssetCard from "components/userAssetsCard/userAssetsCard";
import OrderForm from "./components/form";
import { useRef } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();
  const formRef = useRef();
  const data = useSelector((state) => state?.fundReducer?.data);

  const onFinish = (values) => {
    return modal.success({
      centered: true,
      title: "Success Transaction",
      content: "Transaction is successful",
      onOk: () => navigate(-1),
    });
  };

  return (
    <>
      <div className="mx-5 ">
        <UserAssetCard data={data} />
      </div>
      <OrderForm onFinish={onFinish} formRef={formRef} />
      {contextHolder}
    </>
  );
};
export default Order;
