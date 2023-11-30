import CrudModule from '@/modules/CrudModule/CrudModule';
import CustomerForm from '@/forms/CustomerForm';

import useLanguage from '@/locale/useLanguage';

export default function Customer() {
  const translate = useLanguage();
  const entity = 'client';

  const searchConfig = {
    displayLabels: ['company'],
    searchFields: 'company,managerSurname,managerName',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['company'];

  const readColumns = [
    {
      title: translate('Name'),
      dataIndex: 'company',
    },
    {
      title: translate('Gender'),
      dataIndex: 'gender',
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
  const dataTableColumns = [
    {
      title: translate('Name'),
      dataIndex: 'company',
    },
    {
      title: translate('Gender'),
      dataIndex: 'gender',
    },
    {
      title: translate('phone'),
      dataIndex: 'phone',
    },
    {
      title: translate('Email'),
      dataIndex: 'email',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('customer'),
    DATATABLE_TITLE: translate('Family Members'),
    ADD_NEW_ENTITY: translate('Add Family Member'),
    ENTITY_NAME: translate('customer'),
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
      createForm={<CustomerForm />}
      updateForm={<CustomerForm isUpdateForm={true} />}
      config={config}
    />
  );
}
