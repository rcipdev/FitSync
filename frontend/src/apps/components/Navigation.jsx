import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';

import useLanguage from '@/locale/useLanguage';
import logoIcon from '@/style/images/logo-icon.png';
import { useNavigate } from 'react-router-dom';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  DashboardOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

export default function Navigation() {
  return (
    <>
      <div className="sidebar-wraper">
        <Sidebar collapsible={true} />
      </div>
      <MobileSidebar />
    </>
  );
}

function Sidebar({ collapsible }) {
  let location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const translate = useLanguage();
  const navigate = useNavigate();

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to={'/'}>{translate('dashboard')}</Link>,
    },
    {
      key: 'lead',
      icon: <UserAddOutlined />,
      label: <Link to={'/lead'}>{'Diet'}</Link>,
    },
    {
      key: 'Workout',
      icon: <UserOutlined />,
      label: <Link to={'/employee'}>{translate('Workout')}</Link>,
    },
    {
      key: 'Users',
      icon: <CustomerServiceOutlined />,
      label: <Link to={'/customer'}>{translate('Users')}</Link>,
    },
    {
      key: 'invoice',
      icon: <FileTextOutlined />,
      label: <Link to={'/invoice'}>{'Budget'}</Link>,
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: <Link to={'/payment'}>{'Budget Spent'}</Link>,
    },

    {
      label: translate('Settings'),
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'paymentMode',
          label: <Link to={'/payment/mode'}>{translate('payment_mode')}</Link>,
        },
      ],
    },
  ];

  useEffect(() => {
    if (location) if (currentPath !== location.pathname) setCurrentPath(location.pathname);
  }, [location, currentPath]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: '20px',
        top: '20px',
        bottom: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 20px 3px rgba(150, 190, 238, 0.15)',
      }}
      theme={'light'}
    >
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        {!showLogoApp && (
          <img
            // eslint-disable-next-line no-undef
            src={logoIcon}
            alt="Logo"
            style={{ marginLeft: '10px', height: '70px' }}
          />
        )}
      </div>
      <Menu items={items} mode="inline" theme={'light'} />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ marginLeft: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={200}
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
        rootClassName="mobile-sidebar-wraper"
      >
        <Sidebar collapsible={false} />
      </Drawer>
    </>
  );
}
