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
      title: translate('Walking in mins'),
      dataIndex: 'walking',
    },
    {
      title: translate('Cycling in mins'),
      dataIndex: 'cycling',
    },
    {
      title: translate('Treadmill in mins'),
      dataIndex: 'threadmill',
    },
    {
      title: translate('Yoga in mins'),
      dataIndex: 'yoga',
    },
    {
      title: translate('Calories Burnt'),
      dataIndex: 'caloriesburnt',
    },
    
  ];

  const readColumns = [
    {
      title: translate('Walking in mins'),
      dataIndex: 'walking',
    },
    {
      title: translate('Cycling in mins'),
      dataIndex: 'cycling',
    },
    {
      title: translate('Treadmill in mins'),
      dataIndex: 'threadmill',
    },
    {
      title: translate('Yoga in mins'),
      dataIndex: 'yoga',
    },
    {
      title: translate('Calories Burnt'),
      dataIndex: 'caloriesburnt',
      render: (text, record) => calculateCaloriesBurnt(record),
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