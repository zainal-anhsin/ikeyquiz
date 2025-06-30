import styled from 'styled-components';
import { Button as AntButton } from 'antd';

// Fully rounded, purple button for primary actions
export const StyledButtonPrimary = styled(AntButton)`
  height: 40px;
  border-radius: 999px;
  font-weight: 600;
  min-width: 120px;
  padding: 0 28px;
  font-size: 18px;
  background: #7c5dfa;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  white-space: nowrap;
  text-align: center;
  &:hover, &:focus {
    background: #6c47d8;
    color: #fff;
    opacity: 0.95;
  }
`;

// Rectangle button, less rounded than primary
export const StyledButtonRectangle = styled(StyledButtonPrimary)`
  border-radius: 8px;
`;

export const StyledButtonJoin = styled(AntButton)`
  height: 32px;
  border-radius: 999px;
  font-weight: 600;
  min-width: 80px;
  padding: 0 18px;
  font-size: 15px;
  background: #7c5dfa;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  white-space: nowrap;
  text-align: center;
  &:hover, &:focus {
    background: #6c47d8;
    color: #fff;
    opacity: 0.95;
  }
`;

export const StyledButtonGrey = styled(AntButton)`
  height: 32px;
  border-radius: 999px;
  font-weight: 600;
  min-width: 80px;
  padding: 0 18px;
  font-size: 15px;
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
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;

// Medium grey button with black border and white text
export const StyledButtonMediumGrey = styled(StyledButtonRectangle)`
  background: #9ba7cc;
  color: #fff;
  border: 1px solid #222;
  &:hover, &:focus {
    background: #8993b3;
    color: #fff;
    border-color: #111;
  }
`;

// Medium white button with purple border and purple text
export const StyledButtonMediumWhitePurple = styled(StyledButtonRectangle)`
  background: #fff;
  color: #7c3aed;
  border: 1px solid #7c3aed;
  &:hover, &:focus {
    background: #f8f8fa;
    color: #6c47d8;
    border-color: #6c47d8;
  }
`;

// Small white button with purple border and purple text (same size as ButtonJoin)
export const StyledBtnSmWhite = styled(AntButton)`
  height: 32px;
  border-radius: 8px;
  font-weight: 600;
  min-width: 80px;
  padding: 0 18px;
  font-size: 15px;
  background: #fff;
  color: #7c3aed;
  border: 1px solid #7c3aed;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  white-space: nowrap;
  text-align: center;
  &:hover, &:focus {
    background: #f8f8fa;
    color: #6c47d8;
    border-color: #6c47d8;
  }
`; 