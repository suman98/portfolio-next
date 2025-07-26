'use client';

import React, { useContext, useState, useEffect } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { 
  UserOutlined, 
  ToolOutlined, 
  ExperimentOutlined, 
  BookOutlined, 
  PhoneOutlined,
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { ThemeContext } from '../../../context/ThemeContext';

interface NavMenuProps {
  onMenuClick: (key: string) => void;
  activeSection: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ onMenuClick, activeSection }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsPageLoaded(true)
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const handleMenuClick = (key: string) => {
    onMenuClick(key);
    if (isMobile) {
      closeDrawer();
    }
  };
  
  const menuStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    marginBottom: 10,
    backgroundColor: 'var(--bg-color)',
    borderBottom: '1px solid var(--border-color)',
    boxShadow: '0 2px 8px var(--shadow-color)',
    padding: '0 5%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...(!isPageLoaded && { display: 'none' })
  };

  const menuItemStyle: React.CSSProperties = {
    fontSize: '16px',
    padding: '0 20px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    color: 'var(--text-color)',
  };

  const themeIconStyle: React.CSSProperties = {
    fontSize: '20px',
    cursor: 'pointer',
  };

  const menuItems = [
    {
      key: 'about',
      icon: <UserOutlined style={{ marginRight: '8px' }} />,
      label: 'About'
    },
    {
      key: 'skills',
      icon: <ToolOutlined style={{ marginRight: '8px' }} />,
      label: 'Skills'
    },
    {
      key: 'experience',
      icon: <ExperimentOutlined style={{ marginRight: '8px' }} />,
      label: 'Experience'
    },
    {
      key: 'education',
      icon: <BookOutlined style={{ marginRight: '8px' }} />,
      label: 'Education'
    },
    {
      key: 'contactMe',
      icon: <PhoneOutlined style={{ marginRight: '8px' }} />,
      label: 'Contact'
    }
  ];

  // Theme toggle icon component
  const ThemeToggleIcon = () => {
    if (theme === 'dark') {
      // In dark mode, show sun icon (indicating switch to light mode)
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          style={{...themeIconStyle, color: '#ffd700'}}
        >
          <path 
            fill="currentColor" 
            d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z"
          />
        </svg>
      );
    } else {
      // In light mode, show moon icon (indicating switch to dark mode)
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          style={{...themeIconStyle, color: '#1890ff'}}
        >
          <path 
            fill="currentColor" 
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.41 3.59-8 8-8 .34 0 .68.02 1.01.07C11.1 6.69 10 9.24 10 12s1.1 5.31 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8z"
          />
        </svg>
      );
    }
  };

  // Hamburger Menu Icon with theme-aware styling
  const HamburgerMenuIcon = () => {
    const hamburgerStyle: React.CSSProperties = {
      fontSize: '24px',
      color: 'var(--text-color)',
      transition: 'transform 0.3s ease',
    };

    return (
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: 'var(--bg-color-secondary)',
          boxShadow: '0 2px 4px var(--shadow-color-light)',
        }}
      >
        {visible ? (
          <CloseOutlined style={hamburgerStyle} />
        ) : (
          <MenuOutlined style={hamburgerStyle} />
        )}
      </div>
    );
  };

  // Mobile view
  if (isMobile) {
    return (
      <div style={{
        ...menuStyle,
        padding: '0 15px',
        height: '60px'
      }}>
        <Button
          type="text"
          onClick={showDrawer}
          style={{ 
            height: '60px', 
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
            border: 'none'
          }}
        >
          <HamburgerMenuIcon />
        </Button>
        
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: '10px',
            borderRadius: '50%',
            transition: 'background-color 0.3s'
          }}
          onClick={toggleTheme}
        >
          <ThemeToggleIcon />
        </div>
        
        <Drawer
          title="Menu"
          placement="left"
          onClose={closeDrawer}
          open={visible}
          styles={{
            body: {
              padding: 0
            }
          }}
        >
          <Menu
            mode="vertical"
            selectedKeys={[activeSection]}
            style={{
              height: '100%',
              borderRight: 'none'
            }}
            items={menuItems.map(item => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
              style: {
                margin: 0,
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid var(--border-color)'
              },
              onClick: () => handleMenuClick(item.key)
            }))}
          />
        </Drawer>
      </div>
    );
  }

  // Desktop view (remains the same as previous implementation)
  return (
    <div style={{...menuStyle}} >
      <Menu 
        mode="horizontal" 
        selectedKeys={[activeSection]}
        style={{ border: 'none', backgroundColor: 'transparent', width: '100%' }}
        items={menuItems.map(item => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
          style: menuItemStyle,
          onClick: () => handleMenuClick(item.key)
        }))}
      />
      
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          padding: '10px',
          borderRadius: '50%',
          transition: 'background-color 0.3s',
          cursor: 'pointer'
        }}
        onClick={toggleTheme}
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <ThemeToggleIcon />
      </div>
    </div>
  );
};

export default NavMenu;