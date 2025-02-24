import { Button, Form } from "antd";

const OrderForm = ({ onFinish, formRef }) => {
  return (
    <div className="mt-16 ">
      <Form name="order" onFinish={onFinish} autoComplete="off" ref={formRef}>
        <div className="mx-5 px-5 rounded-xl bg-[#0F0F0F] border border-[#58545f] pt-3 h-32">
          <Form.Item
            layout="vertical"
            label="Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: "Please fill this input!",
              },
            ]}
          >
            <input
              type="tel"
              inputMode="tel"
              className={`ant-form-item-control-input ant-input-affix-wrapper`}
              placeholder="EX:100 usdt"
            />
          </Form.Item>
        </div>

        <div className={`fixed w-full max-w-lg bottom-0 p-5 bg-[#0F0F0F] `}>
          <Button
            htmlType="submit"
            block
            size="large"
            className="border-none bg-[#4F378A]  rounded-lg text-white text-[16px] font-normal leading-7"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default OrderForm;
