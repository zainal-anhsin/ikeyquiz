import React from 'react';
import { ButtonProps } from 'antd/lib/button';
import { StyledBtnPrimary, StyledBtnMdPurple, StyledBtnSmPurple, StyledBtnSmGrey, StyledBtnMdGrey, StyledBtnMdWhite, StyledBtnSmWhite } from './Button.styles';

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

// BtnPrimary for main actions like 'Take Quiz' and 'Login'
export const BtnPrimary: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledBtnPrimary type="primary" {...props}>
      {children}
    </StyledBtnPrimary>
  );
};

// BtnMdPurple for rectangular primary actions
export const BtnMdPurple: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledBtnMdPurple type="primary" {...props}>
      {children}
    </StyledBtnMdPurple>
  );
};

// BtnMdGrey for medium grey button with black border and white text
export const BtnMdGrey: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledBtnMdGrey {...props}>
      {children}
    </StyledBtnMdGrey>
  );
};

// BtnMdWhite for medium white button with purple border and purple text
export const BtnMdWhite: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledBtnMdWhite {...props}>
      {children}
    </StyledBtnMdWhite>
  );
};

// BtnSmPurple for small purple join button
export const BtnSmPurple: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledBtnSmPurple type="primary" {...props}>
      {children}
    </StyledBtnSmPurple>
  );
};

// BtnSmGrey for small grey decline button
export const BtnSmGrey: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledBtnSmGrey {...props}>
      {children}
    </StyledBtnSmGrey>
  );
};



// BtnSmWhite for small white button with purple border and purple text (same size as BtnSmPurple)
export const BtnSmWhite: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledBtnSmWhite {...props}>
      {children}
    </StyledBtnSmWhite>
  );
}; 