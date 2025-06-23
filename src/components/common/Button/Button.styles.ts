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