import { Form, Input, Select } from 'antd';

import useLanguage from '@/locale/useLanguage';

export default function LeadForm() {
  const translate = useLanguage();
  return (
    <>
    <Form.Item
        label={translate('Day')}
        name="day"
        rules={[
          {
            required: false,
          },
        ]}
        initialValue={'Monday'}
      >
        <Select
          options={[
            { value: 'Monday', label: translate('Monday') },
            { value: 'Tuesday', label: translate('Tuesday') },
            { value: 'Wednesday', label: translate('Wednesday') },
            { value: 'Thursday', label: translate('Thursday') },
            { value: 'Friday', label: translate('Friday') },
            { value: 'Saturday', label: translate('Saturday') },
            { value: 'Sunday', label: translate('Sunday') },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item
        label={translate('Breakfast')}
        name="breakfast"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('Lunch')}
        name="lunch"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('Snacks')}
        name="snacks"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('Dinner')}
        name="dinner"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('status')}
        name="status"
        rules={[
          {
            required: false,
          },
        ]}
        initialValue={'new'}
      >
        <Select
          options={[
            { value: 'new', label: translate('new') },
            { value: 'reached', label: translate('reached') },
            { value: 'interested', label: translate('interested') },
            { value: 'not interested', label: translate('not interested') },
          ]}
        ></Select>
      </Form.Item>
    </>
  );
}
