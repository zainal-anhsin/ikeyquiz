import styled from 'styled-components';

export const RectangleCard = styled.div`
  background: #f8f8fa;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  overflow: hidden;
  width: 320px;
  margin-bottom: 24px;
`;

export const RectangleCardHeader = styled.div<{bgcolor: string}>`
  background: ${props => props.bgcolor};
  padding: 20px 24px 12px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RectangleCardBody = styled.div`
  background: #f8f8fa;
  padding: 16px 24px 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CardAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #fff;
  object-fit: cover;
`;

export const CardActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
`;

export const RoundedCard = styled.div<{bordercolor?: string, bgcolor?: string}>`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 999px;
  border: 2px solid ${props => props.bordercolor || '#d1d5db'};
  background: ${props => props.bgcolor || '#fff'};
  padding: 12px 28px 12px 16px;
  min-width: 260px;
  margin-bottom: 24px;
`;
