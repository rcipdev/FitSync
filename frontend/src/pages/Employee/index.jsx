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
      title: translate('Name'),
      dataIndex: ['client', 'company'],
    },
    {
      title: translate('Date'),
      dataIndex: 'date',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
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
      dataIndex: 'caloriesBurnt',
    },
  ];

  const readColumns = [
    // {
    //   title: translate('Name'),
    //   dataIndex: ['client', 'company'],
    // },

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
    // {
    //   title: translate('Calories Burnt'),
    //   dataIndex: 'caloriesburnt',
    //   render: (d) => {
    //     console.log(d);
    //     // const currentTotal = parseInt()(calculate.multiply(subTotal, taxRate), subTotal);
    //     // translate(currentTotal);
    //   },
    // },
  ];

  const Labels = {
    PANEL_TITLE: translate('employee'),
    DATATABLE_TITLE: translate('Workout'),
    ADD_NEW_ENTITY: translate('Add New Workout'),
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
