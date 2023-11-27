import dayjs from 'dayjs';
import { Tag } from 'antd';

import CrudModule from '@/modules/CrudModule/CrudModule';
import LeadForm from '@/forms/LeadForm';

import useLanguage from '@/locale/useLanguage';

export default function Lead() {
  const translate = useLanguage();
  const entity = 'lead';
  const searchConfig = {
    displayLabels: ['Breakfast', 'company'],
    searchFields: 'Breakfast,company',
    outputValue: '_id',
  };
  const entityDisplayLabels = ['number', 'company'];

  const readColumns = [
    {
      title: translate('Day'),
      dataIndex: 'day',

    },
    {
      title: translate('Breakfast'),
      dataIndex: 'breakfast',
    },

    {
      title: translate('Lunch'),
      dataIndex: 'lunch',
    },
    {
      title: translate('Snacks'),
      dataIndex: 'snacks',
    },
    {
      title: translate('Dinner'),
      dataIndex: 'dinner',
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
    },
  ];

  const dataTableColumns = [
    {
      title: translate('Day'),
      dataIndex: 'day',
      render: (day) => {
        let color =
          day === 'Monday'
            ? 'cyan'
            : day === 'Tuesday'
            ? 'blue'
            : day === 'Wednesday'
            ? 'green'
            : day === 'Thursday'
            ? 'orange'
            : day === 'Friday'
            ? 'red'
            : day === 'Saturday'
            ? 'yellow'
            : day === 'Sunday'
            ? 'violet'
            : 'pink'
        return <Tag color={color}>{day && translate(day)}</Tag>;
      }, },
    {
      title: translate('Breakfast'),
      dataIndex: ['breakfast'],
    },
    {
      title: translate('Lunch'),
      dataIndex: ['lunch'],
    },
    {
      title: translate('Snacks'),
      dataIndex: ['snacks'],
    },
    {
      title: translate('Dinner'),
      dataIndex: ['dinner'],
    },
    {
      title: translate('Status'),
      dataIndex: 'status',
      render: (status) => {
        let color =
          status === 'new'
            ? 'cyan'
            : status === 'reached'
            ? 'blue'
            : status === 'interested'
            ? 'green'
            : status === 'not interested'
            ? 'orange'
            : 'red';
        return <Tag color={color}>{status && translate(status)}</Tag>;
      },
    },

  ];

  const Labels = {
    PANEL_TITLE: translate('lead'),
    DATATABLE_TITLE: translate('dine_dairy'),
    ADD_NEW_ENTITY: translate('add_new_dine'),
    ENTITY_NAME: translate('lead'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    readColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm={true} />}
      config={config}
    />
  );
}
