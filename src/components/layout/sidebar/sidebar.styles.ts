import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 280px;
  min-height: 100vh;
  background: #eff2fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const SidebarMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const SidebarItem = styled.button<{ selected?: boolean }>`
  width: 90%;
  margin: 0 auto 16px auto;
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${({ selected }) => (selected ? '#d7d6f8' : '#eaeefc')};
  border: ${({ selected }) => (selected ? '2px solid #7c64e2' : 'none')};
  border-radius: 12px;
  padding: 12px 20px;
  cursor: pointer;
  transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  box-sizing: border-box;

  &:hover {
    background: #d7d6f8;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SidebarIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;
