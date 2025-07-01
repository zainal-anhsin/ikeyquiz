import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  LogoWrapper,
  SidebarMenu,
  SidebarItem,
  SidebarIcon
} from './newSideBar.styles';
import { SidebarLabel } from '../../common/Text/Text';

const menuItems = [
  { label: 'Dashboard', icon: '/sidebar-image/dashboard.png', path: '/dashboard' },
  { label: 'Question Set', icon: '/sidebar-image/questionSet.png', path: '/questionset' },
  { label: 'Student', icon: '/sidebar-image/student.png', path: '/student' },
  { label: 'Teacher', icon: '/sidebar-image/teacher.png', path: '/' },
  { label: 'Setting', icon: '/sidebar-image/setting.png', path: '/setting/manage-group' },
  { label: 'Report', icon: '/sidebar-image/report.png', path: '/report/room-result' },
];

const NewSidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const handleItemClick = (idx: number, path: string) => {
    setSelected(idx);
    navigate(path);
  };

  return (
    <SidebarContainer>
      <LogoWrapper>
        <img src="/sidebar-image/logo.png" alt="LiveQuiz Logo" style={{ width: 220, height: 'auto' }} />
      </LogoWrapper>
      <SidebarMenu>
        {menuItems.map((item, idx) => (
          <SidebarItem
            key={idx}
            selected={selected === idx}
            onClick={() => handleItemClick(idx, item.path)}
          >
            <SidebarIcon src={item.icon} alt={item.label} />
            <SidebarLabel>{item.label}</SidebarLabel>
          </SidebarItem>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default NewSidebar;
