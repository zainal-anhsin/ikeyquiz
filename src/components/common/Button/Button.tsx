import React from 'react';
import { ButtonProps } from 'antd/lib/button';
import { StyledButtonPrimary, StyledButtonRectangle, StyledButtonJoin, StyledButtonGrey } from './Button.styles';

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

// ButtonPrimary for main actions like 'Take Quiz' and 'Login'
export const ButtonPrimary: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButtonPrimary type="primary" {...props}>
      {children}
    </StyledButtonPrimary>
  );
};

// ButtonRectangle for rectangular primary actions
export const ButtonRectangle: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButtonRectangle type="primary" {...props}>
      {children}
    </StyledButtonRectangle>
  );
};

// ButtonJoin for small purple join button
export const ButtonJoin: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButtonJoin type="primary" {...props}>
      {children}
    </StyledButtonJoin>
  );
};

// ButtonGrey for small grey decline button
export const ButtonGrey: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButtonGrey {...props}>
      {children}
    </StyledButtonGrey>
  );
}; 