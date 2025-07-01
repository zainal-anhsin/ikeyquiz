import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: auto;
  height: 92px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: relative;
  z-index: 10;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SchoolIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f0ecfc;
  object-fit: cover;
`;

export const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #2d3783;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
