import { Form, Input, Select } from 'antd';
import { validatePhoneNumber } from '@/utils/helpers';

import useLanguage from '@/locale/useLanguage';

export default function CustomerForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('Field cannot be empty'));
    }

    return Promise.resolve();
  };

  return (
    <>
      <Form.Item
        label={translate('Name')}
        name="company"
        rules={[
          {
            required: true,
          },
          // {
          //   validator: validateEmptyString,
          // },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate('gender')}
        name="gender"
        rules={[
          {
            required: true,
          },
        ]}
        initialValue={'select'}
      >
        <Select
          options={[
            { value: 'select', label: translate('select') },
            { value: 'Men', label: translate('Men') },
            { value: 'Women', label: translate('Women') },
          ]}
        ></Select>
      </Form.Item>

      <Form.Item
        name="phone"
        label={translate('phone')}
        rules={[
          {
            required: true,
          },
          {
            pattern: validatePhoneNumber, // importing regex from helper.js utility file to validate
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label={translate('email')}
        rules={[
          {
            type: 'email',
          },
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
