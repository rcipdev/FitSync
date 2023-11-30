import dayjs from 'dayjs';
import useLanguage from '@/locale/useLanguage';
import PaymentDataTableModule from '@/modules/PaymentModule/PaymentDataTableModule';

export default function Payment() {
  const translate = useLanguage();
  const searchConfig = {
    displayLabels: ['number'],
    searchFields: 'number',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['number'];
  const dataTableColumns = [
    // {
    //   title: translate('Name'),
    //   dataIndex: 'amount',
    // },{
    //   title: translate('Transaction Id'),
    //   dataIndex: ['invoice', 'number'],
    // },
    {
      title: translate('Date'),
      dataIndex: 'date',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: translate('Payment Method'),
      dataIndex: ['paymentMode', 'name'],
    },
    {
      title: translate('Amount'),
      dataIndex: 'amount',
    },
  
    {
      title: translate('Member Name'),
      dataIndex: ['client', 'company'],
    },
  ];

  const entity = 'payment';

  const Labels = {
    PANEL_TITLE: translate('payment'),
    DATATABLE_TITLE:'Budget Spent Details',
    ADD_NEW_ENTITY: translate('add_new_payment'),
    ENTITY_NAME: translate('payment'),
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
    searchConfig,
    entityDisplayLabels,
  };
  return <PaymentDataTableModule config={config} />;
}
