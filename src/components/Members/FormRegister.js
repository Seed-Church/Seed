import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
} from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 4 },
    sm: { span: 4 },
    md: { span: 4 },
     lg: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 12 },
    sm: { span: 12 },
    md: { span: 12 },
    lg: { span: 12 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

const FormRegister = () => {
  const [componentSize] = useState("large");

  return (
    <div>
      <Form initialValues={{ size: componentSize }} size={componentSize}>
        <Form.Item {...formItemLayout} label="Name">
          <Input />
        </Form.Item>
        <Form.Item {...formItemLayout} label="NickName">
          <Input />
        </Form.Item>
        <Form.Item {...formItemLayout} label="LastName">
          <Input />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Believe date">
          <DatePicker />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Age">
          <InputNumber />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Facebook">
          <Input />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Address">
          <Input.TextArea />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button htmlType="submit" type="danger" style={{ marginRight: 8 }}>
            clear
          </Button>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormRegister;
