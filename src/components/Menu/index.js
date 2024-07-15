import React, { useContext, useLayoutEffect } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const MainMenu = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useLayoutEffect(()=>{
    if(user?.role != 'student'){
      // <Link to={`/admin-dashboard`}/>
      navigate('/admin-dashboard');
    }else if(user?.role == 'student'){
      navigate(`/student-dashboard/${user?.id}`);
    }
  },[user])

  return (
    <Menu mode="horizontal" style={{borderBottomLeftRadius:8, borderBottomRightRadius:8}}>
      {user && user.role === 'student' && (
        <Menu.Item key="student-dashboard">
          <Link to="/student-dashboard">Student Dashboard</Link>
        </Menu.Item>
      )}
      {user && user.role != 'student' && (
        <>
          <Menu.Item key="admin-dashboard">
            <Link to="/admin-dashboard">Admin Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="student-report">
            <Link to="/student-report/1">Student Report</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default MainMenu;
