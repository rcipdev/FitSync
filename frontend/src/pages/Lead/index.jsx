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
      title: translate('Date'),
      dataIndex: 'date',

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
    {
      title: translate('Email'),
      dataIndex: 'email',
    },
  ];

  const dataTableColumns = [
    {
      title: translate('Date'),
      dataIndex: 'date',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
      {
        title: translate('Breakfast'),
        dataIndex: 'breakfast',
        render: (breakfast) => {
          let color =
          breakfast === 'Select'
              ? 'violet'
              : breakfast === 'Oatmeal'
              ? 'blue'
              : breakfast === 'Whole Grain Toast'
              ? 'green'
              : breakfast === 'Nuts'
              ? 'orange'
              : breakfast === 'Green Tea'
              ? 'red'
              : breakfast === 'eggs'
              ? 'cyan'
              : breakfast === 'Greek Yogurt'
              ? 'yellow'
              : 'skyblue'
          return <Tag color={color}>{breakfast && translate(breakfast)}</Tag>;
        }, },
        {
          title: translate('Lunch'),
          dataIndex: 'lunch',
          render: (lunch) => {
            let color =
            lunch === 'Select'
                ? 'violet'
                : lunch === 'Chicken Salad'
                ? 'blue'
                : lunch === 'Quinoa Bowl'
                ? 'green'
                : lunch === 'Avocado Wrap'
                ? 'orange'
                : lunch === 'Vegetarian Stir-Fry'
                ? 'red'
                : lunch === 'Sweet Potato'
                ? 'yellow'
                : lunch === 'Vegetable Soup'
                ? 'cyan'
                : 'skyblue'
            return <Tag color={color}>{lunch && translate(lunch)}</Tag>;
          }, },
          {
            title: translate('Snacks'),
            dataIndex: 'snacks',
            render: (snacks) => {
              let color =
              snacks === 'Select'
                  ? 'violet'
                  : snacks === 'Fresh Fruits'
                  ? 'blue'
                  : snacks === 'Vegetable Sticks'
                  ? 'green'
                  : snacks === 'Nuts and Seeds'
                  ? 'orange'
                  : snacks === 'Hard-Boiled Eggs'
                  ? 'red'
                  : snacks === 'Homemade Smoothies'
                  ? 'yellow'
                  : snacks === 'Cottage Cheese'
                  ? 'cyan'
                  : 'skyblue'
              return <Tag color={color}>{snacks && translate(snacks)}</Tag>;
            }, },
            {
              title: translate('Dinner'),
              dataIndex: 'dinner',
              render: (dinner) => {
                let color =
                dinner === 'Select'
                    ? 'violet'
                    : dinner === 'Grilled Chicken'
                    ? 'blue'
                    : dinner === 'Vegetable Stir-Fry'
                    ? 'green'
                    : dinner === 'Brown Rice Bowls'
                    ? 'orange'
                    : dinner === 'Salmon with Vegetables'
                    ? 'red'
                    : dinner === 'Veggie Burgers'
                    ? 'yellow'
                    : dinner === 'Mediterranean Platter'
                    ? 'cyan'
                    : 'skyblue'
                return <Tag color={color}>{dinner && translate(dinner)}</Tag>;
              }, },
    {
      title: translate('Status'),
      dataIndex: 'status',
      render: (status) => {
        let color =
          status === 'Planned'
            ? 'cyan'
            : status === 'Under Consumed'
            ? 'orange'
            : status === 'Over Consumed'
            ? 'red'
            : status === 'Completed'
            ? 'green'
            : 'yellow';
        return <Tag color={color}>{status && translate(status)}</Tag>;
      },
    },
    // {
    //   title: translate('Email'),
    //   dataIndex: 'email',
    // },
  ];

  const Labels = {
    PANEL_TITLE: 'Diet',
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