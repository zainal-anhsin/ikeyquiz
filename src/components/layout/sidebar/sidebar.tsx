import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  LogoWrapper,
  SidebarMenu,
  SidebarItem,
  SidebarIcon
} from './sidebar.styles';
import { SidebarLabel } from '../../common/Text/Text';

const menuItems = [
  { label: 'School', icon: '/sidebar-image/school.png', path: '/' },
  { label: 'Quiz', icon: '/sidebar-image/quiz.png', path: '/quiz' },
  { label: 'Homework', icon: '/sidebar-image/homework.png', path: '/homework' },
  { label: 'Exam', icon: '/sidebar-image/Exam.png', path: '/exam' },
  { label: 'School', icon: '/sidebar-image/school.png', path: '/' },
  { label: 'School', icon: '/sidebar-image/school.png', path: '/' },
  { label: 'School', icon: '/sidebar-image/school.png', path: '/' },
];

const Sidebar = () => {
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

export default Sidebar;
