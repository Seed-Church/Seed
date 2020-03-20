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
  const [componentSize, setComponentSize] = useState("small");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
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
