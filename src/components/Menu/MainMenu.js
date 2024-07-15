import React, { useContext } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const MainMenu = () => {
  const { user } = useContext(UserContext);

  return (
    <Menu mode="horizontal">
      {user && user.role === 'student' && (
        <Menu.Item key="student-dashboard">
          <Link to="/student-dashboard">Student Dashboard</Link>
        </Menu.Item>
      )}
      {user && user.role === 'admin' && (
        <>
          <Menu.Item key="admin-dashboard">
            <Link to="/admin-dashboard">Admin Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="student-report">
            <Link to="/student-report/2">Student Report</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default MainMenu;
