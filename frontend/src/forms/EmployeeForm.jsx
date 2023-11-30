import React from 'react';
import { Form, Input, Select } from 'antd';
import { DatePicker } from 'antd';
import { validatePhoneNumber } from '@/utils/helpers';
import dayjs from 'dayjs';

import useLanguage from '@/locale/useLanguage';
import AutoCompleteAsync from '@/components/AutoCompleteAsync';

export default function EmployeeForm() {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        name="client"
        label={'Family Member'}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <AutoCompleteAsync
          entity={'client'}
          displayLabels={['company']}
          searchFields={'company'}
          // onUpdateValue={autoCompleteUpdate}
        />
      </Form.Item>
      <Form.Item
        name="date"
        label={translate('Date')}
        rules={[
          {
            required: true,
            type: 'object',
          },
        ]}
        initialValue={dayjs()}
      >
        <DatePicker style={{ width: '100%' }} format={'DD/MM/YYYY'} />
      </Form.Item>
      <Form.Item
        name="walking"
        label={translate('Walking in mins')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="cycling"
        label={translate('Cycling in mins')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="threadmill"
        label={translate('Threadmill in mins')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="yoga"
        label={translate('Yoga in mins')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item
        name="caloriesburnt"
        label={translate('Calories Burnt')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item> */}
      {/* <Form.Item
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
      </Form.Item> */}
    </>
  );
}
