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
  Switch,
  Row,
  Col
} from "antd";
import FormItem from "antd/lib/form/FormItem";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 7 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 14,
      offset: 6
    }
  }
};

const FormRegister = () => {
  const [componentSize, setComponentSize] = useState("middle");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div>
      <Form
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item
          {...formItemLayout}
          wrapperCol={{ span: 14 }}
          label="Form Size"
          name="size"
        >
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
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
          <Button htmlType="submit" type="danger" style={{marginRight:8}}>
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
