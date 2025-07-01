import React from 'react';
import { Outlet } from 'react-router-dom';
//import Navbar from './navbar/navbar';
//import Sidebar from './sidebar/sidebar';

import NewNavbar from './newNavbar/newNavbar';
import NewSidebar from './newSidebar/newSideBar';

import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Add a wrapper for consistent content spacing
const ContentWrapper = styled.div`
  max-width: 1300px;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 32px 0;
  width: 100%;
`;

const MainLayout = () => {
  return (
    <LayoutContainer>
      <NewSidebar />
      <MainContent>
        <NewNavbar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
};

export default MainLayout; 