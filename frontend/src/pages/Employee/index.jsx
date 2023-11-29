import React from 'react';

import useLanguage from '@/locale/useLanguage';
import CrudModule from '@/modules/CrudModule/CrudModule';
import EmployeeForm from '@/forms/EmployeeForm';
import dayjs from 'dayjs';
export default function Employee() {
  const translate = useLanguage();
  const entity = 'employee';
  const searchConfig = {
    
    splayLabels: ['name', 'surname'],
    searchFields: 'name,surname,birthday',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['name', 'surname'];

  const dataTableColumns = [
    {
      title: translate('first name'),
      dataIndex: 'name',
    },
    {
      title: translate('last name'),
      dataIndex: 'surname',
    },
    {
      title: translate('gender'),
      dataIndex: 'gender',
    },
    {
      title: translate('Birthday'),
      dataIndex: 'birthday',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: translate('Weight'),
      dataIndex: 'weight',
    },
    {
      title: translate('Target Weight'),
      dataIndex: 'targetweight',
    },
    
  ];

  const readColumns = [
    {
      title: translate('first name'),
      dataIndex: 'name',
    },
    {
      title: translate('last name'),
      dataIndex: 'surname',
    },
    {
      title: translate('Birthday'),
      dataIndex: 'birthday',
      isDate: true,
    },
    {
      title: translate('gender'),
      dataIndex: 'gender',
    },
    {
      title: translate('Weight'),
      dataIndex: 'weight',
    },
    {
      title: translate('Target Weight'),
      dataIndex: 'targetweight',
    },
    {
      title: translate('address'),
      dataIndex: 'address',
    },
    {
      title: translate('Phone'),
      dataIndex: 'phone',
    },
    {
      title: translate('Email'),
      dataIndex: 'email',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('employee'),
    DATATABLE_TITLE: translate('employee_list'),
    ADD_NEW_ENTITY: translate('add_new_employee'),
    ENTITY_NAME: translate('employee'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<EmployeeForm />}
      updateForm={<EmployeeForm isUpdateForm={true} />}
      config={config}
    />
  );
}