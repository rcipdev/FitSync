import { Descriptions, Dropdown, Table } from 'antd';

import { request } from '@/request';
import useFetch from '@/hooks/useFetch';

import { EllipsisOutlined, EyeOutlined, EditOutlined, FilePdfOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { erp } from '@/redux/erp/actions';
import useLanguage from '@/locale/useLanguage';
import { useNavigate } from 'react-router-dom';
import { DOWNLOAD_BASE_URL } from '@/config/serverApiConfig';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import { Chart } from 'react-google-charts';

export default function RecentTable({ ...props }) {
  const translate = useLanguage();
  let { entity, dataTableColumns } = props;

  const items = [
    {
      label: translate('Show'),
      key: 'read',
      icon: <EyeOutlined />,
    },
    {
      label: translate('Edit'),
      key: 'edit',
      icon: <EditOutlined />,
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRead = (record) => {
    dispatch(erp.currentItem({ data: record }));
    navigate(`/${entity}/read/${record._id}`);
  };
  const handleEdit = (record) => {
    dispatch(erp.currentAction({ actionType: 'update', data: record }));
    navigate(`/${entity}/update/${record._id}`);
  };
  const handleDownload = (record) => {
    window.open(`${DOWNLOAD_BASE_URL}${entity}/${entity}-${record._id}.pdf`, '_blank');
  };

  dataTableColumns = [
    ...dataTableColumns,
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Dropdown
          menu={{
            items,
            onClick: ({ key }) => {
              switch (key) {
                case 'edit':
                  handleEdit(record);
                  break;

                default:
                  break;
              }
            },
          }}
          trigger={['click']}
        >
          <EllipsisOutlined
            style={{ cursor: 'pointer', fontSize: '24px' }}
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      ),
    },
  ];

  const asyncList = () => {
    return request.list({ entity });
  };
  const { result, isLoading, isSuccess } = useFetch(asyncList);
  const firstFiveItems = () => {
    if (isSuccess && result) return result.slice(0, 5);
    return [];
  };

  const { expandedRowData, tableColumns, tableHeader } = useResponsiveTable(
    dataTableColumns,
    firstFiveItems()
  );

  return (
    <div ref={tableHeader}>
      <Table
        columns={tableColumns}
        rowKey={(item) => item._id}
        dataSource={isSuccess && firstFiveItems()}
        pagination={false}
        loading={isLoading}
        expandable={
          expandedRowData.length
            ? {
                expandedRowRender: (record) => (
                  <Descriptions title="" bordered column={1}>
                    {expandedRowData.map((item, index) => {
                      return (
                        <Descriptions.Item key={index} label={item.title}>
                          {item.render?.(record[item.dataIndex])?.children
                            ? item.render?.(record[item.dataIndex])?.children
                            : item.render?.(record[item.dataIndex])
                            ? item.render?.(record[item.dataIndex])
                            : Array.isArray(item.dataIndex)
                            ? record[item.dataIndex[0]]?.[item.dataIndex[1]]
                            : record[item.dataIndex]}
                        </Descriptions.Item>
                      );
                    })}
                  </Descriptions>
                ),
              }
            : null
        }
      />
    </div>
  );
}

export function NutritionChart({ ...props }) {
  const translate = useLanguage();
  let { entity, dataTableColumns } = props;

  const asyncList = () => {
    return request.leadsummary({ entity });
  };
  const { result, isLoading, isSuccess } = useFetch(asyncList);
  const cdata = [['User', 'Calories Consumed', 'Calories Burnt']];
  if (result && result.length && result.length > 0)
    result.forEach((data) => {
      cdata.push([data.client.company, parseInt(data.nutrients), data.caloriesBurnt]);
    });
  const options = {
    title: 'Summary',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Calories',
      minValue: 0,
    },
    vAxis: {
      title: 'User',
    },
  };

  return <Chart chartType="BarChart" width="100%" height="400px" data={cdata} options={options} />;
}
