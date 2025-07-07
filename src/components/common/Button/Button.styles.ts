import styled from 'styled-components';
import { Button as AntButton } from 'antd';

// Fully rounded, purple button for primary actions
export const StyledBtnPrimary = styled(AntButton)`
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
export const StyledBtnMdPurple = styled(StyledBtnPrimary)`
  border-radius: 8px;
`;

// Medium grey button with black border and white text
export const StyledBtnMdGrey = styled(StyledBtnMdPurple)`
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
export const StyledBtnMdWhite = styled(StyledBtnMdPurple)`
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

export const StyledBtnSmPurple = styled(AntButton)`
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

export const StyledBtnSmGrey = styled(AntButton)`
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

// Small white button with purple border and purple text (same size as BtnSmPurple)
export const StyledBtnSmWhite = styled(AntButton)`
  height: 31px;
  border-radius: 8px;
  font-weight: 600;
  min-width: 64px;
  padding: 0 10px;
  font-size: 12px;
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

