import React from 'react';
import { Switch, Form, Input, Select } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';

export default function PaymentModeForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  return (
    <>
      <Form.Item
        label={translate('Payment Mode')}
        name="name"
        rules={[
          {
            required: true,
          },

        ]} initialValue={'Debit Card'}
      >
        <Select
          options={[
            { value: 'Debit Card', label: translate('Debit Card') },
            { value: 'Credit Card', label: translate('Credit Card') },
            { value: 'Zelle', label: translate('Zelle') },
            { value: 'Apple Pay', label: translate('Apple Pay') },
          ]}
        ></Select>
        
      </Form.Item>
      <Form.Item
        label={translate('Description')}
        name="description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('enabled')}
        name="enabled"
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
        valuePropName="checked"
        initialValue={true}
      >
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      </Form.Item>
      <Form.Item
        label={translate('Default Mode')}
        name="isDefault"
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
        valuePropName="checked"
      >
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      </Form.Item>
    </>
  );
}
