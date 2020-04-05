import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch
} from "antd";

const FormMemorize = () => {
  const [componentSize] = useState("large");
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"

        size={componentSize}
      >
        <Form.Item label="Bible">
          <Input />
        </Form.Item>
        <Form.Item label="Note">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Button">
          <Button type="primary">Save</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormMemorize;
