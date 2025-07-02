import styled from 'styled-components';
import { Button as AntButton } from 'antd';

// Fully rounded, purple button for primary actions
export const StyledButtonPrimary = styled(AntButton)`
  height: 40px;
  border-radius: 999px;
  font-weight: 600;
  min-width: 120px;
  padding: 0 18px;
  font-size: 14px;
  background: #6666FF;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  white-space: nowrap;
  text-align: center;
  &:hover, &:focus {
    background: #3333cc;
    color: #fff;
    opacity: 0.95;
  }
`;

// Rectangle button, less rounded than primary
export const StyledButtonRectangle = styled(StyledButtonPrimary)`
  border-radius: 8px;
`;

export const StyledButtonJoin = styled(AntButton)`
  height: 28px;
  border-radius: 999px;
  font-weight: 600;
  min-width: 64px;
  padding: 0 12px;
  font-size: 11px;
  background: #6666FF;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  white-space: nowrap;
  text-align: center;
  &:hover, &:focus {
    background: #3333cc;
    color: #fff;
    opacity: 0.95;
  }
`;

export const StyledButtonGrey = styled(AntButton)`
  height: 28px;
  border-radius: 999px;
  font-weight: 600;
  min-width: 64px;
  padding: 0 12px;
  font-size: 11px;
  background: #e5e7eb;
  color: #b0b3b9;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  white-space: nowrap;
  text-align: center;
  &:hover, &:focus {
    background: #e5e7eb;
    color: #888;
    opacity: 0.95;
  }
`;

export const ButtonText = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
`;

// Medium grey button with black border and white text
export const StyledButtonMediumGrey = styled(StyledButtonRectangle)`
  background: #9ba7cc;
  color: #fff;
  border: 1px solid #222;
  font-size: 14px;
  &:hover, &:focus {
    background: #8993b3;
    color: #fff;
    border-color: #111;
  }
`;

// Medium white button with purple border and purple text
export const StyledButtonMediumWhitePurple = styled(StyledButtonRectangle)`
  background: #fff;
  color: #6666FF;
  border: 1px solid #6666FF;
  font-size: 14px;
  &:hover, &:focus {
    background: #f8f8fa;
    color: #3333cc;
    border-color: #3333cc;
  }
`;

// Small white button with purple border and purple text (same size as ButtonJoin)
export const StyledBtnSmWhite = styled(AntButton)`
  height: 28px;
  border-radius: 8px;
  font-weight: 600;
  min-width: 64px;
  padding: 0 10px;
  font-size: 11px;
  background: #fff;
  color: #6666FF;
  border: 1px solid #6666FF;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  white-space: nowrap;
  text-align: center;
  &:hover, &:focus {
    background: #6666FF;
    color: #fff;
    border-color: #3333cc;
  }
`; 